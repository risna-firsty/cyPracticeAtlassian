# cyPractice-atlassian

Hi, there. This is only an E2E automation testing using cypress to Atlassian pages for practice purpose. 

## Overview
Here, you can see the three files in the e2e folder. Each file contains some test cases related to the name of the file. Since the scripts have already been run, you can see the videos and reports in the related folders. If you want to know how I did this entire practice, let's move to the next section.

## How to...
1. Install [Cypress]{https://docs.cypress.io/guides/getting-started/installing-cypress}
2. Install [mochawsome]{https://www.npmjs.com/package/cypress-mochawesome-reporter} 
3. Open cypress.config.js file, and enable the video with this code:
    video:true
4. Open e2e folder, delete all default files from cypress installation (if any)
5. Add the scripts inside e2e folder
6. Run the script with this command npx cypress run
7. Wait a momment until its running is completed.
8. Once it's finished, reports and videos folders are generated.