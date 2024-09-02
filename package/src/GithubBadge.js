'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ICONS_MAP = {
    aura999: 'https://vaibhav1663.github.io/custumized-google-form/images/stargazers-aura+999.png',
    githubsimple: 'https://vaibhav1663.github.io/custumized-google-form/images/git-simple-contrast.png',
    github3d: 'https://vaibhav1663.github.io/custumized-google-form/images/git-3d.png',
    octocat: 'https://vaibhav1663.github.io/custumized-google-form/images/octocat-simple.png',
    octocatcoloured: 'https://vaibhav1663.github.io/custumized-google-form/images/octocat-colored.png',
    chad: "https://vaibhav1663.github.io/custumized-google-form/images/chad.png",
    gigachad: "https://vaibhav1663.github.io/custumized-google-form/images/gigachad.png",
    oggigachad: "https://vaibhav1663.github.io/custumized-google-form/images/og-gigachad.png",
    socialcredits0: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-0.png",
    'socialcredits-100': "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-100.png",
    'socialcredits-200': "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-200.png",
    'socialcredits-300': "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-300.png",
    socialcredits999: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits+100.png",
    communist: "https://vaibhav1663.github.io/custumized-google-form/images/communist.png",
}
const GithubBadge = (props) => {
    const [starCount, setStarCount] = useState(-1);
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
    const baseClass = "github-star-badge";
    const themeClass = props.theme || "";
    const customClass = props.className || "";

    return (
        <a href={props.url} className={`${baseClass} ${themeClass} ${customClass}`} style={props.style} target="_blank" rel="noreferrer">
            <img src={ICONS_MAP[props.icon] || ICONS_MAP.octocatcoloured} alt="Git Icon" style={{ "width": "2rem", "height": "2rem" }} />
            <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                <p style={{ "fontSize": "0.8rem", "lineHeight": "1rem", textDecoration: 'none' }}>
                    {props.text}
                </p>
                <p style={{ "fontSize": "0.8rem", "lineHeight": "1rem", "fontWeight": 700, textDecoration: 'none' }}>
                    {starCount != -1 ? formatStarCount(starCount) + ' star' + (starCount > 1 ? 's' : '') : "Loading..."}
                </p>
            </div>
        </a>
    )
}

export default GithubBadge