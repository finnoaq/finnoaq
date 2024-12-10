'use client';

import jsonp from 'jsonp';
import Image from 'next/image';

const isDev = process.env.NODE_ENV === 'development' ? true : false;

export default function SubscribeHomeTwo() {
  const postUrl =
    'https://gmail.us15.list-manage.com/subscribe/post?u=69b7cb14141130167ae56c5f5&amp;id=ba1be9304e&amp;f_id=00f293e0f0';

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const email = e.currentTarget.EMAIL.value;

    jsonp(`${postUrl}&EMAIL=${email}`, { param: 'c' }, function (_, data) {
      const { msg, result } = data;
      // do something with response
      alert(msg);
      console.log(result);
    });

    e.currentTarget.reset();
  }

  return (
    <>
      <div className='subscrbie-section p100-bg'>
        <div className='container'>
          <div className='subscribe-wrapper-v02'>
            <div className='container'>
              <div className='row g-4 align-items-center justify-content-between'>
                <div className='col-lg-6 col-md-5'>
                  <div className='subs-contentv2'>
                    {/* <h5>Subscribe our newsletter</h5> */}
                    <h5>“ Not ready to decide ?</h5>
                    {/* <h2>
                      <span>Subscribe</span> for any information
                    </h2> */}
                    <h2>
                      <span>Subscribe</span> for Free Farming Resource Guide
                    </h2>
                  </div>
                </div>
                <div className='col-lg-6 col-md-7'>
                  <form
                    onSubmit={handleSubscribe}
                    className='subscribe-form02 flex-sm-nowrap flex-wrap'>
                    <input
                      type='text'
                      placeholder='Enter Your Email'
                      name='EMAIL'
                      className='required email'
                      id='mce-EMAIL'
                      required
                      defaultValue={isDev ? 'someone@gmail.com' : ''}
                    />
                    <button className='cmn-btn cmn-white p900-clr round100 text-capitalize'>
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <Image
              src='/assets/img/footer/subscribe-shapev2.png'
              alt='img'
              className='subscribe-shapev2 w-auto h-auto'
              width={235}
              height={252}
            />
          </div>
        </div>
      </div>
    </>
  );
}
