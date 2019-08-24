# react getting started
## minification
In production, it is recommended to minify any JavaScript code that is included with your application. Minification can help your website load several times faster, especially as the size of your JavaScript source code grows.

### Here's one way to set it up:

```
1. Install Node.js
2. Run `npm init -y` in your project folder (don't skip this step!)
3. Run `npm install terser`

 Now, to minify a file called like_button.js, run in the terminal:

4. `npx terser -c -m -o like_button.min.js -- like_button.js`
```

This will produce a file called like_button.min.js with the minified code in the same directory. If you're typing this often, you can create an npm script to give this command a name.

important minification scripts
`<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>`

# Using JSX
The quickest way to try JSX in your project is to add this <script> tag to your page:

`<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>`

Now you can use JSX in any <script> tag by adding type="text/babel" attribute to it. Here is an example HTML file with JSX that you can download and play with.

This approach is fine for learning and creating simple demos. However, it makes your website slow and isn’t suitable for production. When you’re ready to move forward, remove this new <script> tag and the type="text/babel" attributes you’ve added. Instead, in the next section you will set up a JSX preprocessor to convert all your <script> tags automatically.

# Add JSX to a Project

Adding JSX to a project doesn’t require complicated tools like a bundler or a development server. Essentially, adding JSX is a lot like adding a CSS preprocessor. The only requirement is to have Node.js installed on your computer.

Go to your project folder in the terminal, and paste these two commands:

```
Step 1: Run npm init -y (if it fails, here’s a fix)
Step 2: Run npm install babel-cli@6 babel-preset-react-app@3
```