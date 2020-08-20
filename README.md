# Momentum - just another pomodoro timer app (but better)

You can see this app live right [here](https://sarmentow.github.io/momentum)

I've never quite found a pomodoro timer app that fitted exactly my workflow and was foolproof, so I built one out of nothing but a bad example of perfectionism and a lot of existencial crises in the middle.

At first, I had a grand vision for it, with features like being able to import your tasks from Trello and being able to create workspaces where you and your team would be able to see what tasks everyone was currently doing (as in right now) but every time I thought I had finished the project it just seemed like there was still a shit ton to do that had little effect on the real product features and/or was just way too complicated for such an unoriginal idea, and I just didn't feel like putting so much effort into such an unoriginal project.

Still, I've learned a lot with the development of Momentum and if you want to see a complete analysis of what I've learned from this project I suggest you go to [my personal website](https://sarmentow.github.io) where I'll be posting a breakdown of what this project has teached me.

If you want to contribute there are little things that would be nice to implement such as saving the tasks to localStorage in order for the user to not lose all their tasks if they accidentally reload or implementing a warning if the user tries to reload saying that they will lose their tasks if they do that. Also, I had a version of momentum with some sound effects, but I gave up on it because they were of pretty bad quality. Would be nice to add SFX again when the pomodoro has ended.

## How to contribute

Install depencies with Yarn

`$ yarn`

Then build the tailwind styles with:

`$ yarn run watch:css`

After all of that, you can start your React server with:

`$ yarn start`
