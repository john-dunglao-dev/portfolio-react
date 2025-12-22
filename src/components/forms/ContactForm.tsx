import { useState, type ChangeEvent, type FormEvent, type JSX } from 'react';
import { ArrowClockwiseIcon } from '@phosphor-icons/react';
import NoticeModal from '../layouts/modal/NoticeModal';
import { type NoticeType } from '../layouts/modal/NoticeModal';

function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noticeModalType, setNoticeModalType] = useState<NoticeType>('success');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    sendCopy: false,
  });

  const formNoticeModal: Record<NoticeType, JSX.Element | null> = {
    success: (
      <NoticeModal
        show={isModalOpen}
        message="Your email has been sent! I'll get back to you shortly."
        noticeType="success"
      />
    ),
    error: (
      <NoticeModal
        show={isModalOpen}
        message="There was an error sending your email. Please try again later."
        noticeType="error"
      />
    ),
    info: null,
    warning: null,
  };

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
    setIsLoading(true);

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
        setNoticeModalType('success');
        setIsModalOpen(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          sendCopy: formData.sendCopy,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setNoticeModalType('error');
        setIsModalOpen(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h4 className="text-2xl font-semibold mb-4">Contact Me</h4>
      <p className="mt-2">I'll get back to you as soon as possible.</p>

      <form className="mt-6" onSubmit={handleSubmit}>
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
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary accent-selection"
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
            {isLoading && (
              <ArrowClockwiseIcon className="animate-spin h-4 w-4 mr-2 inline-block" />
            )}
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {isModalOpen && formNoticeModal[noticeModalType]}
    </>
  );
}

export default ContactForm;
