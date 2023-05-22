function UserdefStyle() {
  let text = `React.js is a powerful JavaScript library for building user interfaces in web applications. It follows a component-based architecture, allowing developers to create reusable UI components. React.js uses a virtual DOM, which improves performance by efficiently updating only the necessary parts of the user interface.
  One of the key features of React.js is its declarative nature. Developers can describe how the UI should look at any given time, and React.js takes care of updating the DOM to reflect those changes. This makes it easier to manage and debug complex UIs.
  React.js also provides a unidirectional data flow through props and state, enabling predictable and efficient data management. It integrates well with other libraries and frameworks, making it a popular choice for frontend development.
  Furthermore, React.js has a vibrant ecosystem with a vast collection of third-party libraries, tools, and extensions that enhance its capabilities. It is widely adopted by companies and developers worldwide and has a large and active community, providing continuous support and resources.
  Overall, React.js empowers developers to build dynamic, interactive, and scalable user interfaces with ease, making it a go-to choice for modern web development`;
  let customeStyle = { background: "purple", color: "white" };

  return <h3 style={customeStyle}>{text}</h3>;
}
export default UserdefStyle;
