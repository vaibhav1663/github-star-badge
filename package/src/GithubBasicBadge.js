'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GithubBasicBadge = (props) => {
    const [starCount, setStarCount] = useState(0);
    useEffect(() => {
        // Function to extract repo owner and name from GitHub URL
        const getRepoDetailsFromUrl = (url) => {
            const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (match && match.length === 3) {
                return { owner: match[1], repo: match[2] };
            } else {
                throw new Error("Invalid GitHub repository URL");
            }
        };

        try {
            // Extract owner and repo name from the provided URL
            const { owner, repo } = getRepoDetailsFromUrl(props.url);

            // Construct the API URL
            const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

            // Configuration for the API request
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: apiUrl,
                headers: {}
            };

            // Make the API request
            axios.request(config)
                .then((response) => {
                    setStarCount(response.data.stargazers_count);
                })
                .catch((error) => {
                    throw new Error("Error fetching data from GitHub API: " + error.message);
                });

        } catch (error) {
            console.log("Error fetching data from GitHub API: " + error.message);
        }
    }, [props.url]);

    const formatStarCount = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        } else {
            return count;
        }
    }

    const baseClass = "github-star-badge basic";
    const themeClass = props.theme || "";
    const customClass = props.className || "";

    return (
        <a href={props.url} className={`${baseClass} ${themeClass} ${customClass}`} style={props.style} target="_blank" rel="noreferrer">
            <img src='https://vaibhav1663.github.io/custumized-google-form/images/git-simple-contrast.png' alt="Git Icon" style={{ "width": "1.2rem", "height": "1.2rem" }} />
            <p style={{"fontSize":"0.8rem","lineHeight":"1rem", textDecoration: 'none'}}>
                {props.text}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" style={{"width":"1.1rem","height":"1.1rem","transitionProperty":"all","transitionTimingFunction":"cubic-bezier(0.4, 0, 0.2, 1)","transitionDuration":["300ms","300ms"]}}>
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd"></path>
            </svg>
            <p style={{"fontSize":"0.8rem","lineHeight":"1rem","fontWeight":700, textDecoration: 'none'}}>
                {formatStarCount(starCount)}
            </p>
        </a>
    )
}

export default GithubBasicBadge