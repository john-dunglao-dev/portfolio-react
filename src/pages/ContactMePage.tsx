import { useState, type ChangeEvent, type FormEvent } from 'react';

function ContactMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.debug('Sending contact form data:', formData);
    console.debug(
      'Sending to',
      import.meta.env.VITE_API_BASE_URL + '/api/contact/send-to-author'
    );

    fetch(import.meta.env.VITE_API_BASE_URL + '/api/contact/send-to-author', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <h1 className="text-center">Contact Me</h1>

      <p className="mt-4 text-center">
        Feel free to reach out to me via email at{' '}
        <a
          href="mailto:jfsdunglao@gmail.com"
          className="text-blue-500 hover:underline"
        >
          jfsdunglao@gmail.com
        </a>{' '}
        or connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/jfsdunglao/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>

      <p className="mt-2 text-center">
        You can also find me on{' '}
        <a
          href="https://github.com/john-dunglao-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        .
      </p>

      <p className="mt-2 text-center">
        Or simply fill out the contact form below, and I'll get back to you as
        soon as possible.
      </p>

      <form className="mt-6 max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="john.doe@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Subject
          </label>
          <input
            type="tel"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Subject of your message"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Heartfelt message goes here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-primary"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2 text-sm text-foreground">
              Should I send you a copy of this message?
            </span>
          </label>
        </div>

        <div className="text-right mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactMePage;
