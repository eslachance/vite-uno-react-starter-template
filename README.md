# Vite + UnoCSS + React stack

This project is my own personal starting point to create new smaller, test, and rapid prototyping projects.

It consists of the following stack elements:

## Vite

[Vite](https://vitejs.dev/guide/) is the greatest replacement you can find for the previous `create-react-app` command and not only that, it also serves for a lot more than just react. In fact, it supports everything from vanilla javascript projects all the way to newer exciting frameworks like [Solid](https://www.solidjs.com/). As the name implies ("vite" means "fast" in French), its performance when developing your project is unequaled. It just blows babel/webpack out of the water.

It has a bunch of built-in features that I keep discovering. For example, built-in sass support. Automatic env variable replacements in your index.html file when you have various environments you build on. The greatest hot module reload system you'll ever find. Super easy typescript integration. The list just goes on.

On top of that, it offers multiple plugins and configurations that just make your life a heck of a lot easier. Specifically, Uno.

## UnoCSS

[UnoCSS](https://unocss.dev/) is actually fairly unknown at the moment (according to surveys), and describes itself as the "Instant On-demand Atomic CSS Engine". It integrates into `vite` directly and is highly customizable with some great presets and plugins of its own. The thing I really love about Uno is that [you can just start creating your own](https://unocss.dev/guide/) global classes, overrides, and themes out of the box. But it really shines when you start adding [presets](https://unocss.dev/presets/). Take a look at the `unocss.config.js` file to see which presets _I'm_ using - I think they're a great starting point for any project if you agree with the choices I made:

- `@unocss/preset-icons` is a library of _tens of thousands_ of icons you can use from various sources including fontawesome, material-icons, etc. You choose the icon, throw it in, and vite takes care of treeshaking the unused icons out of your bundle. So you get all the icons, at none of the cost. It's just great.
- `@unocss/preset-uno` might sound generic, but it's far from. It's a className collection which essentially merges all the helper classes from `Tailwind`, `Bootstrap`, `Tachyons` and `Windi CSS`. And just like icons, it'll treeshake its way out of dead CSS like a dog after a mud bath. Personally, I adore class helpers above "component libraries" because I can use them everywhere, with all my projects, in all frameworks. Who wants `<Box sx={{ display: flex, flexDirection: 'column' }}>` when you can just do `<div className="flex flex-column">` ? C'mon. You know you want it.
- `@unocss/preset-web-fonts` again gives you treeshaken powerful tools, this time in the shape of fonts. It provides `Google`, `Bunny Fonts` and `FontShare` providers for all your font needs, and also the ability to add custom ones directly. No more complicated `@font-face` rules in some random CSS File.

Oh yeah and the classes, fonts and icons, they work in the index.html too (in case you had to add some styling to the html and body elements for example)

## React

While [React](https://react.dev/) isn't actually my framework of choice (yes, it's a framework, not a library, don't taze me bro), as I'd rather use [Solid](https://www.solidjs.com/), the reality is that the companies I've worked mostly use React and statistically speaking, so do you. I'm keeping this boiletplate project free of any additional react dependencies (no Redux, React Router, or anything like that) since I never know what I'm going to actually use and I'd rather now add any point less dependencies that go in the front-end. Hopefully I don't need to sing the praises of the React framework, which is well known, well supported, and highly extendable with a diverse and established user ecosystem.

### Using with other frameworks

If you _do_ want to try out this stack with other frameworks, you can actually do that pretty easily in two different ways. First, you could close _this_ repository, remove react as a dependency and install your own, add the proper `vite` config plugin for your framework, and then just go at it. Alternatively, you can also just use [a `vite` template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), and re-add the dependencies I'm using via this list: `npm i unocss @unocss/preset-icons @unocss/preset-uno @unocss/preset-web-fonts @iconify/json`

## ESLint + Prettier

I am a huge proponent for _consistent coding styles_ because when I see code where you _sometimes_ have semicolons and _sometimes_ but not always spaces between `if` and the parentheses, or inconsistent trailing commas in lists... I just want to tear my eyes out with a rusty spoon. So, please, clean up after yourself. Use ESLint + Prettier.

Now obviously, configurations for these systems is highly opinionated. My own choices might not be yours, so don't hesitate to change the ESLint and Prettier configuration files (`.eslintrc.json` and `.prettierrc` respectively) to your own liking.
