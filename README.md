<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Deploy Gatsby on cPanel
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

## How to run

Clone this repository and Navigate into your directory. Run


    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

    Your site is now running at http://localhost:8000!

## How to Deploy

***Step 1: Create a Production Build***



Before we proceed, ensure that you have a Gatsby.js app ready for deployment. 

Run the command: npm run build or gatsby build

This will generate a production-ready build of your Gatsby.js app in the “public” directory.
Gatsbyjs App On Cpanel

 <img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-80.png" />

The public folder is essentially a super-compressed version of your program that has everything your browser needs to identify and run your app.

go to your public folder. Select all of your file and compress them into a zip file.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-81-2-768x432.png" />


***Step 2: Prepare Your cPanel Account***

To deploy your Gatsby.js app on cPanel, you need to perform the following preparations:

Access your cPanel account.
Set up a new subdomain or use an existing one for your React app. For example, “react.yourdomain.com”.
To create a subdomain. Go to your cPanel account. Find domains section Click “Domains” under the “Domains” section.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-82-768x432.png" />

Click the “Create A New Domain” button.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-47-4-768x432.png" />

Enter the subdomain name to add in the “Domain” text box.

Deselect the “Share document root (/home/username/public_html) with “domain.tld”.” option.

Enter the directory where you want the files for this subdomain to exist.

Click the “Submit” button.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-71-768x432.png" />


***Step 3: Upload Your React.js App to cPanel***

Now, let’s upload your React.js app to cPanel

After submit the subdomain name you will see your newly created subdomain in domain list.

now click on document root to navigate root folder

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-83-768x432.png" />

it will redirects you to a new tab with cPanel file manager where you will see your subdomain root folder and click on it. After clicking the folder the folder should be empty.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-75-768x432.png" />

on top bar you will see a upload button. click on it and it will redirect you to a new tab where you can upload your Gatsby.js file.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-84-768x432.png" />

Upload your zip file from public folder what you have created little earlier.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-85-768x432.png" />

After uploading 100% go to cPanel file manager tab and click on refresh button.

You will see uploaded zip file there and extract the file

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-78-768x432.png" />

Now you’ll see extracted folder file here.

<img alt="Gatsby" src="https://bitbyhost.com/wp-content/uploads/2023/06/Screenshot-86-768x432.png" />

Once the upload is complete, ensure that the subdomain folder contains the “index.html” file and other assets.

***Step 4: Access Your Deployed Gatsby.js App***

Congratulations! Your Gatsby.js app is now deployed on cPanel shared hosting. To access it, simply open your web browser and visit your subdomain URL (e.g., gatsby.yourdomain.com). You should see your Gatsby.js app running smoothly.


## Resources

to learn more <a href="https://bitbyhost.com/deploy-a-gatsbyjs-app-on-cpanel/" target="_blank">Deploy a Gatsbyjs App on cPanel Step-by-Step Guide</a>

## Credits

https://bitbyhost.com/
&
https://bitbytesoft.com/