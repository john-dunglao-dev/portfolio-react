function Message() {
  const name = '';

  if (name) {
    return <h2 className="text-2xl font-bold">Hello {name}!</h2>;
  }
  return <h2 className="text-3xl font-bold">Hello World as testing #6</h2>;
}

export default Message;
