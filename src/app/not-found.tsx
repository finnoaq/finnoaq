import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{ height: '100dvh' }}
      className='container d-flex flex-column align-items-center justify-content-center gap-4'>
      <h2 className='wow fadeInUp text-center' data-wow-delay='0.2s'>
        Not Found 404
      </h2>
      <p className={'text-primary text-center'}>
        Could not find requested resource
      </p>
      <Link href='/' className='cmn-btn round-100 primary-border'>
        Return Home
      </Link>
    </div>
  );
}
