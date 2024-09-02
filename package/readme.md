
# Github star badge

Easily add a GitHub star badge to your repository with this simple package. Customize the appearance of the badge with a few props, and see the changes in real time using our editor.


## Installation

To install the package, use npm:

```bash
  npm install github-star-badge
```

or yarn 

```bash
  yarn add github-star-badge
```

## Usage

Import the `GithubBadge` or `GithubBasicBadge` component into your React project to display the badge on your site.

### Example Usage

```javascript
import { GithubBadge, GithubBasicBadge } from 'github-star-badge';

const MyComponent = () => (
  <div>
    <GithubBadge 
      url="https://github.com/vaibhav1663/promt3d" 
      theme="system" 
      text="Star on GitHub"
      icon="socialcredits999"
    />
    
    <GithubBasicBadge 
      url="https://github.com/vaibhav1663/promt3d" 
      theme="system" 
      text="Star on GitHub"
    />
  </div>
);

```

### Props

- `url`: The URL of the GitHub repository.
- `theme`: The theme of the badge (light, dark, or system).
- `text`: The text displayed on the badge.
- `icon`: The icon to display next to the text.

### Custom Styling
You can pass custom styles to the badge component as props to further customize its appearance.

## Live Editor
Use our [online editor](https://github-star-badge.vercel.app/) to preview and customize your badge in real-time before implementing it in your project.

## Authors

- [@vaibhav](https://www.github.com/vaibhav1663)

