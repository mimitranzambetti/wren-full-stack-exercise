# Wren Full Stack Dev Exercise: Offset everyday purchases

Hello! We really liked talking to you in our first call. Now we'd love to simulate a slightly mroe "real world" scenario, where we can see how you approach building a functioning product from a high level mockup and description.

## The Objective

At Wren, we have this idea for a web dashboard where you could see your carbon footprint in "real time" and offset purchases you make on a daily basis. So, instead of calculating your carbon footprint by answering a survey, you could calculate your carbon footprint by connecting your credit card. As you make any purchases, we would assign those purchases a carbon footprint.

The science behind this is too complicated to fully cover here, but the short version of it is we can assign a "carbon impact" to each dollar you spend based on what you spent it on. Imagine you spend a dollar on gas—that has a high carbon footprint. If you instead spend it on buying a sustainably crafted wood table, that dollar would have a much smaller carbon footprint. Generally, spending more dollars means you're buying more stuff, which has a bigger carbon footprint than buying less stuff.

Here's how we want it to look:

![Start State Mockup](https://github.com/mimi-tranzambetti/wren-full-stack-exercise/blob/master/mockups/start_state.png)

As you can see, the top section shows your own impact—how much carbon you've emitted this month (or in other words, your carbon footprint for the month) and how much you've offset this month. We also give users a big orange button so they can offset their purchases and live carbon neutral :)

The bottom section is a list of all transactions for this user, with some information about the purchase. The "Carbon Impact (g)" column shows the carbon impact in grams of that purchase. The "Neutralized" column indicates if the purchase has been offset or not.

Clicking the "Offset x purchases" button would offset all purchases that have not already been offset. Once they've clicked the offset button, the page should look like this:

![End State Mockup](https://github.com/mimi-tranzambetti/wren-full-stack-exercise/blob/master/mockups/end_state.png)

As you can see, all purchases have been marked "neutralized" and the button to offset purchases has disappeared.

### Technical details

Mostly, this objective can be accomplished through some React code, and light API work that should be straightforward. But there are 2 things that might need some additional clarification:

1. We lay out the "algorithm" for the carbon impact of products at the end of this readme. Feel free to implement this functionality however you like.
2. Instead of using a real database, we are using a simple JSON file. The app should save whether or not a transaction has been neutralized in this JSON file, so if you close the web page and then open it again any offsets you have performed will persist.

## Your Task

Given the "starter code" in this repo, we want you to build a web app that accomplishes the objective laid out above. Once it's complete, go ahead and email the code in a .zip file back to us.

We would also like to hear your perspective on how you would use an actual database instead of a JSON file. What kind of database would you use? What would its architecture look like? If we had many user accounts, instead of just the one in this example, what would need to change about the database setup? No need to actually build this part, just write a couple sentences about how you'd approach adding a real database to the app.

## What we've provided

This repo contains a simple React app, Express API, and a JSON "database" of transaction data.

The starting react app looks like this:

![Starter App](https://github.com/mimi-tranzambetti/wren-full-stack-exercise/blob/master/mockups/starter-app.png)

Below, you can see the math you should use for calculating the carbon impact of products.

### Carbon Impact of Products

For each dollar spent on purchases in the following categories, what is the carbon impact?

- Coffee & Tea: 42 grams of CO2 per dollar
- Grocery: 60 grams of CO2 per dollar
- Furniture: 6 grams of CO2 per dollar
- Rideshare: 1800 grams of CO2 per dollar

*How to use*

Let's say I spent $5.86 on a latte. That fits into the coffee & tea category. I see that for items in the Coffee & Tea category, spending $1 is responsible for on average 42 grams of CO2 emissions. So, spending $5.86 on coffee has a carbon impact of 246.12 grams (5.86 * 42).

## How to submit

Once you've finished, email a zip of your files to team@projectwren.com. Also include a couple of sentences on how you would approach adding a database to the app, as described in the "Your Task" section.

Please feel free to ask us any questions over email to clarify anything!
