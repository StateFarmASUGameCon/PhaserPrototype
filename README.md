# State Farm Competition Instructions
## Prerequisites
* Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Create a [GitHub account](http://github.com)
* Install [Visual Studio Code](https://code.visualstudio.com/) and the "Live Server" extension (recommended, but not required)

## Getting Started
1. Navigate to https://github.com/StateFarmASUGameCon/BaseGame in your browser.
1. Click the "Fork" button in the top right corner. Choose your account as the namespace to fork to. After a few seconds you should be redirected to the new repository.
1. Click the "Settings" button at the top.
1. Scroll down to the "GitHub Pages" section.
1. For "Source", select "Master Branch". The page will then save and refresh.
1. Scroll back down to the "GitHub Pages" section, and click the link where the site is published to and verify the base game is playable.
1. Scroll back up to the top of the page and click the "Code" button to go back to the home page of the repository.

## Local Project Setup
1. Navigate to the repository we created in the "Getting Started Instructions".
1. Click the "Clone or download button" on the right.
1. Copy the url provided.
1. Open the GitBash program (windows) or terminal (mac/linux) and navigate to the folder you want to work from. If you need help with bash commands, talk to one of the State Farm employees and we'll help you out.
1. Run the command `git clone {url you copied here}` replacing my url with the one you copied. ex. `git clone https://github.com/my-account/MyProject.git`
1. You can now start modifying the code on your workstation.

## View game locally
1. Open the folder containing the code within Visual Studio Code.
1. Open the `index.html` file.
1. Click "Go Live" at the bottom.
1. Your game should now appear in your browser.

## Submission Instructions
1. Push changes to the master branch of your repository. See basic git commands below, or talk to one of us if you need help.
1. Verify your changes have been pushed by going to the home page of your repository, and clicking the "environment" button.
1. Click "View Deployment".
1. Verify the game looks correct, then copy the url for the page.
1. Navigate to the original game you forked from. https://github.com/StateFarmASUGameCon/BaseGame
1. Click the "Issues" button at the top.
1. Create a "New Issue".
1. Click "Get Started" next to "Game Submission".
1. Provide the name of your game, the link you copied, and a link to your repository.
1. Submit the issue, and pay attention to notifications on your issue as this is how we will contact the winner.
1. Submission cutoff is 7:30, and we plan on announcing the winner by 8:00.

## Basic git commands
* `git clone` - downloads the code repository to your local workstation.
* `git add` - stages changed files
* `git commit` - commits the files you've staged
* `git push` - pushed the commit to the remote repository
* More git commands as well as a detailed explanation of these can be found [here](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html). Let us know if you need help with these.

Testing out the [Phaser](https://github.com/photonstorm/phaser) game framework.

Code pulled from Emanuele Feronato's [One Tap RPG tutorial](https://www.emanueleferonato.com/2019/02/18/html5-prototype-of-one-tap-rpg-game-built-with-phaser-3-and-matter-js/).

Latest running version available [here](https://statefarmasugamecon.github.io/PhaserPrototype/).
