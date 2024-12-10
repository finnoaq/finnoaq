'use client';

import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useRef } from 'react';

const isDev = process.env.NODE_ENV === 'development' ? true : false;

export default function ContactHomeTwo() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // console.log('EMAIL_JS_PUBLIC_KEY:', process.env);
    // if (!process.env.EMAIL_JS_PUBLIC_KEY) {
    //   alert('EmailJS public key is missing!');
    //   return;
    // }

    const firstName = e.currentTarget.fname.value;
    const lastName = e.currentTarget.lname.value;
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;
    const location = e.currentTarget.location.value;
    const subject = e.currentTarget.subject.value;
    const message = e.currentTarget.message.value;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !location ||
      !subject ||
      !message
    ) {
      alert('Please fill in all fields!');
      return;
    }

    // Initialize EmailJS
    (function () {
      emailjs.init({
        publicKey: 'gRkzDlSYT06nckfoW',
      });
    })();

    const serviceId = 'service_jkzp9sg';
    const templateId = 'template_x2ecfdq';
    const form = formRef.current;

    if (!serviceId || !templateId || !form) {
      alert('EmailJS service ID, template ID or form is missing!');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Message failed to send!');
      }
    );

    // Clear form
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    formRef.current?.reset();
  }

  return (
    <section
      id='contact'
      className='talking-section overflow-hidden space-top space-bottom'>
      <div className='container'>
        <div className='row g-4 align-items-xl-center flex-row-reverse justify-content-between'>
          <div className='col-md-6'>
            <div className='talking-contact-box'>
              <div className='conatact-box common-contact-inner position-relative'>
                <div className='section-title mb-40'>
                  <h5 className='p1-clr wow fadeInLeft' data-wow-delay='0.4s'>
                    Contact
                  </h5>
                  <h2>Share your Query ?</h2>
                </div>
                <form
                  ref={formRef}
                  id='myForm'
                  onSubmit={handleSubmit}
                  className='row g-xl-4 g-3'>
                  <div className='col-12 col-lg-6'>
                    <label htmlFor='fname' className={'visually-hidden'}>
                      First Name
                    </label>
                    <input
                      type='text'
                      placeholder='First Name'
                      name='fname'
                      id='fname'
                      autoComplete='given-name'
                      defaultValue={isDev ? 'John' : ''}
                      required
                    />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <label htmlFor='lname' className={'visually-hidden'}>
                      Last Name
                    </label>
                    <input
                      type='text'
                      placeholder='Last Name'
                      name='lname'
                      id='lname'
                      autoComplete='family-name'
                      defaultValue={isDev ? 'doe' : ''}
                      required
                    />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <label htmlFor='email' className={'visually-hidden'}>
                      Email
                    </label>
                    <input
                      type='email'
                      placeholder='E-mail'
                      name='email'
                      id='email'
                      autoComplete='email'
                      defaultValue={isDev ? 'somoone@example.com' : ''}
                      required
                    />
                  </div>
                  <div className='col-12 col-lg-6'>
                    <label htmlFor='phone' className={'visually-hidden'}>
                      Phone
                    </label>
                    <input
                      type='tel'
                      placeholder='Mobile Number'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      defaultValue={isDev ? '9999911111' : ''}
                      required
                    />
                  </div>
                  <div className='col-lg-12'>
                    <label htmlFor='location' className={'visually-hidden'}>
                      Location
                    </label>
                    <input
                      type='text'
                      placeholder='Location'
                      name='location'
                      id='location'
                      defaultValue={isDev ? 'Somewhere in the world' : ''}
                      required
                    />
                  </div>
                  <div className='col-lg-12'>
                    <label htmlFor='subject' className={'visually-hidden'}>
                      Subject
                    </label>
                    <input
                      type='text'
                      placeholder='Subject'
                      name='subject'
                      id='subject'
                      defaultValue={isDev ? 'Subject' : ''}
                      required
                    />
                  </div>
                  <div className='col-lg-12'>
                    <label htmlFor='message' className={'visually-hidden'}>
                      Message
                    </label>
                    <textarea
                      name='message'
                      placeholder='Message'
                      rows={4}
                      style={{ resize: 'none' }}
                      id='message'
                      defaultValue={isDev ? 'Message' : ''}
                      required
                    />
                  </div>
                  <div className='col-lg-6'>
                    <button className='cmn-btn text-capitalize'>
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='taklking-cotnact-thumb w-100 wow fadeInRight'
              data-wow-delay='.4s'>
              <Image
                // src='/assets/img/contact/talking-contact.png'
                src='/Contact us.jpg'
                alt='img'
                className='w-100 h-100 object-fit-cover'
                // width={710}
                width={1200}
                height={968}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
