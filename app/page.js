'use client'
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { GithubBadge, GithubBasicBadge } from 'github-star-badge';
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { github, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ICONS_MAP = [
  {
    id: 'aura999',
    url: 'https://vaibhav1663.github.io/custumized-google-form/images/stargazers-aura+999.png',
    alt: 'Aura999 icon'
  },
  {
    id: 'githubsimple',
    url: 'https://vaibhav1663.github.io/custumized-google-form/images/git-simple-contrast.png',
    alt: 'Githubsimple icon'
  },
  {
    id: 'octocat',
    url: 'https://vaibhav1663.github.io/custumized-google-form/images/octocat-simple.png',
    alt: 'Octocat icon'
  },
  {
    id: 'octocatcoloured',
    url: 'https://vaibhav1663.github.io/custumized-google-form/images/octocat-colored.png',
    alt: 'Octocatcoloured icon'
  },
  {
    id: 'chad',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/chad.png",
    alt: 'Chad icon'
  },
  {
    id: 'gigachad',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/gigachad.png",
    alt: 'Gigachad icon'
  },
  {
    id: 'socialcredits0',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-0.png",
    alt: 'Socialcredits -0 icon'
  },
  {
    id: 'socialcredits-100',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-100.png",
    alt: 'Socialcredits -100 icon'
  },
  {
    id: 'socialcredits-200',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-200.png",
    alt: 'Socialcredits -200 icon'
  },
  {
    id: 'socialcredits-300',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits-300.png",
    alt: 'Socialcredits300 icon'
  },
  {
    id: 'socialcredits999',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/stargazers-social-credits+100.png",
    alt: 'Socialcredits +999 icon'
  },
  {
    id: 'communist',
    url: "https://vaibhav1663.github.io/custumized-google-form/images/communist.png",
    alt: 'Communist icon'
  }
]

export default function Home() {
  const [icon, setIcon] = useState('socialcredits999')
  const [url, setUrl] = useState('https://github.com/vaibhav1663/promt3d')
  const [text, setText] = useState('Star on Github')
  const [theme, setTheme] = useState('system')

  const [badgeText, setBadgeText] = useState(`<GithubBadge \n\turl="https://github.com/vaibhav1663/promt3d" \n\ttheme="light" \n\ttext="Available on Github"\n\ticon="gigachad"\n/>`)
  const [basicBadgeText, setBasicBadgeText] = useState(`<GithubBasicBadge \n\turl="https://github.com/vaibhav1663/promt3d" \n\ttheme="light" \n\ttext="Available on Github"\n/>`)


  useEffect(() => { setBadgeText(`<GithubBadge \n\turl="${url}" \n\ttheme="${theme}" \n\ttext="${text}"\n\ticon="${icon}"\n/>`) }, [url, theme, text, icon])
  useEffect(() => { setBasicBadgeText(`<GithubBasicBadge \n\turl="${url}" \n\ttheme="${theme}" \n\ttext="${text}"\n/>`) }, [url, theme, text])

  const handleCopy = (string) => {
    navigator.clipboard.writeText(string);
    toast.success('Copied to clipboard');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 dark:bg-gray-900 bg-gray-50">
      <div className="max-w-5xl w-full justify-center text-sm flex flex-col md:flex-row">
        <div className="w-full items-center justify-center text-base flex-col flex-1 m-0 md:m-4">
          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github link to repo</label>
          <input value={url} onChange={(e) => { setUrl(e.target.value) }} id="url" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://github.com/vaibhav1663/promt3d" />

          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Text on Badge</label>
          <input id="text" value={text} onChange={(e) => { setText(e.target.value) }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Star on Github" />

          <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Icon</label>
          <div className="flex flex-wrap gap-2 justify-center">
            {ICONS_MAP.map((item, index) => (
              <button onClick={() => { setIcon(item.id) }} key={index} value={item.id} className={`relative has-tooltip rounded p-2  transition-all duration-300 ease-in-out ${item.id === icon ? 'bg-blue-500 dark:bg-blue-600 hover:bg-blue-400 dark:hover:bg-blue-500' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                <span class='tooltip text-xs rounded shadow-lg p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow'>{item.alt}</span>
                <img src={item.url} alt={item.alt} className="w-12 h-12 " />
              </button>
            ))}
          </div>

          <label htmlFor="inline-radio-group" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Theme</label>
          <div className="flex">
            <div className="flex items-center me-4">
              <input onClick={() => { setTheme('light') }} checked={theme === 'light'} id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Light</label>
            </div>
            <div className="flex items-center me-4">
              <input onClick={() => { setTheme('dark') }} checked={theme === 'dark'} id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</label>
            </div>
            <div className="flex items-center me-4">
              <input onClick={() => { setTheme('system') }} checked={theme === 'system'} id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="inline-checked-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">System</label>
            </div>
          </div>
        </div>
        <div className="w-full text-sm flex flex-col flex-1 gap-4 p-0 mt-4 md:mt-0 md:p-4">
          <div className="relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-800 shadow">
            <div className="absolute w-full top-0 left-0 text-sm flex justify-between items-center p-1.5 px-2 bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
              <p>Install the package</p>
              <button className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => { handleCopy(`import { GithubBadge, GithubBasicBadge } from 'github-star-badge';`) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                </svg>
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={{ padding: '0.5rem', paddingTop: '3rem', }} className='font-mono pt-4' >
              {`npm install github-star-badge`}
            </SyntaxHighlighter>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-800 shadow ">
            <div className="absolute w-full top-0 left-0 text-sm flex justify-between items-center p-1.5 px-2 bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
              <p>Steal the badge with ꝏ aura</p>
              <button className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => { handleCopy(``) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                </svg>
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={{ padding: '0.5rem', paddingTop: '3rem', }} className='font-mono pt-4' >
              {badgeText}
            </SyntaxHighlighter>
          </div>
          <GithubBadge
            url={url}
            theme={theme}
            text={text}
            icon={icon}
            style={{}}
          />
          <div className="relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-800 shadow">
            <div className="absolute w-full top-0 left-0 text-sm flex justify-between items-center p-1.5 px-2 bg-gray-50 dark:text-gray-100 dark:bg-gray-800">
              <p>Get the badge with 0 aura</p>
              <button className="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600" onClick={() => { handleCopy(``) }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                </svg>
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={{ padding: '0.5rem', paddingTop: '3rem', }} className='font-mono pt-4' >
              {basicBadgeText}
            </SyntaxHighlighter>
          </div>

          <GithubBasicBadge
            url={url}
            theme={theme}
            text={text}
            style={{}}
          />
        </div>


      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </main>
  );
}
