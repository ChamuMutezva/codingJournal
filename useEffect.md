# Synchronizing with Effects
Some components need to synchronize with external systems. For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.

Effects let you specify **side effects** that are caused by **rendering** itself, rather than by a **particular event**. Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it needs to happen regardless of which interaction caused the component to appear. Effects run at the end of the rendering process after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).

## You might not need an Effect
[You might not need an Effect](https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-write-an-effect)

Don’t rush to add Effects to your components. Keep in mind that Effects are typically used to “step out” of your React code and synchronize with some external system. This includes browser APIs, third-party widgets, network, and so on. If your effect only adjusts some state based on other state, you might not need an Effect.

## How to write an Effect

To write an Effect, follow these three steps:

1. Declare an Effect. By default, your Effect will run after every render.
2. Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. For example, a fade-in animation should only trigger when a component appears. Connecting and disconnecting to a chat room should only happen when the component appears and disappears, or when the chat room changes. You will learn how to control this by specifying dependencies.
 3. Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. For example, “connect” needs “disconnect,” “subscribe” needs “unsubscribe,” and “fetch” needs either “cancel” or “ignore”. You will learn how to do this by returning a cleanup function.

[Let’s look at each of these steps in detail](https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-write-an-effect)
