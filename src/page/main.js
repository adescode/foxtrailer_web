import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <header class='site-header sec-bk-color'>
        <a href='#main' class='sr-only sr-only-focusable'>
          Skip to main content
        </a>
        <div class='container'>
          <nav
            class='navbar navbar-expand-lg navbar-light py-3'
            aria-label='Main navigation'
          >
            <Link class='navbar-brand text-dark' to='/'>
              <img src='assets/logo.png' alt='foxtrailer logo' />
            </Link>
            <a
              href='https://github.com/adescode/foxtrailer'
              class='navbar-toggler collapsed'
            >
              <i class='fab fa-github fa-lg pri-color'></i>
            </a>
            <div class='navbar-collapse collapse' id='navbarNav'>
              <a
                href='https://github.com/adescode/foxtrailer'
                class='navbar-nav align-items-lg-center text-uppercase pt-3 pt-lg-0 ml-auto'
              >
                <i class='fab fa-github fa-lg pri-color'></i>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id='main'>
        <section class='container'>
          <div class='row justify-content-lg-between align-items-lg-center py-5'>
            <div class='col-lg-6 col-xl-5 mb-4 text-center text-lg-left'>
              <h1 class='display-4 mb-4'>
                Your mobile movie trailer application
              </h1>
              <p class='lead mb-4'>
                The easiest and fastest way to find and discover movies and tv
                shows on your device.
                {/* also get updates on your favorites movie or
                tv show. */}
              </p>
              <a
                class='btn btn-pill btn-primary btn-block d-md-inline-block w-auto mx-1 ml-sm-0 my-3'
                href='#'
                role='button'
              >
                <i class='fab fa-apple fa-lg mr-1' aria-hidden='true'></i>
                <span>App Store</span>
              </a>
              <a
                class='btn btn-pill btn-block d-md-inline-block w-auto mx-1 ml-sm-0 my-3 btn-outline-success pri-color'
                href='https://play.google.com/store/apps/details?id=com.foxtrailer'
                role='button'
              >
                <i class='fab fa-google-play fa-lg mr-1' aria-hidden='true'></i>
                <span>Play Store</span>
              </a>
            </div>
            <div class='col-lg-6 col-xl-7'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/fox-trailer.appspot.com/o/FCMImages%2Fdeadpool.png?alt=media&token=0f1cf43b-8008-4f4e-9cc6-4f31d9e07585'
                class='d-none d-lg-block img-fluid'
                alt=''
              />
            </div>
          </div>
        </section>

        <div class='bg-skew bg-skew-light'>
          <section class='container'>
            <div class='row align-items-center py-5'>
              <div class='col-lg-4'>
                <div class='iphone-x mb-5 mx-auto'>
                  <div
                    class='screen'
                    style={{ backgroundImage: 'url(assets/starwars.png)' }}
                  ></div>
                </div>
              </div>
              <div class='col-lg-8'>
                <div class='row'>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i
                          class='icon-inner fab fa-accessible-icon'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>Accessible</h3>
                        <p>
                          Built with accessibility in mind and following best
                          practices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i
                          class='icon-inner fas fa-project-diagram'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>Performance</h3>
                        <p>
                          Performance standards and provide a quality user
                          experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i
                          class='icon-inner fas fa-mobile-alt'
                          aria-hidden='true'
                        ></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>App Size</h3>
                        <p>Code compressed for quick and easy download.</p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i class='icon-inner fas fa-code'></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>Valid Code</h3>
                        <p>
                          Valid code to ensure that app works properly on all
                          major devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i class='icon-inner fas fa-image'></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>Images</h3>
                        <p>Easy image download for wallpaper or backgrounds.</p>
                      </div>
                    </div>
                  </div>
                  <div class='col-sm-6 mb-4'>
                    <div class='media'>
                      <span class='icon icon-primary mr-3'>
                        <i class='icon-inner fas fa-share-alt'></i>
                      </span>
                      <div class='media-body'>
                        <h3 class='h5 mb-2'>Share</h3>
                        <p>
                          Share app with friends and family. Rate us and give us
                          feedback
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class='container'>
            <h2 class='h3 mt-5 mb-4 text-center'>What people are saying…</h2>
            <div class='row py-5'>
              <div class='col-md'>
                <blockquote class='bg-white rounded shadow mb-4 p-4 p-lg-5 text-center'>
                  <img
                    class='avatar avatar-md mb-4'
                    src='https://lh3.googleusercontent.com/a-/AAuE7mDXB8BZbTmkq3k1z-nDWK9vSLnHC4Q7W2V1kHUG=w96-h96-n-rw'
                    alt='Akinbinu Anuoluwa'
                  />
                  <p class='text-secondary'>
                    Simple light trailer app. Nice App.
                  </p>
                  <cite class='small text-uppercase'>Akinbinu Anuoluwa</cite>
                </blockquote>
              </div>
              <div class='col-md'>
                <blockquote class='bg-white rounded shadow mb-4 p-4 p-lg-5 text-center'>
                  <img
                    class='avatar avatar-md mb-4'
                    src='https://lh3.googleusercontent.com/a-/AAuE7mC8FSzMwmeObbruYTPLEr5YtIHMinKC7KSGnikg=w96-h96-n-rw'
                    alt='prototypes club'
                  />
                  <p class='text-secondary'>
                    Another perfect app from a nigerian, perfect color choice,
                    smooth and simple. Well done
                  </p>
                  <cite class='small text-uppercase'>prototypes club</cite>
                </blockquote>
              </div>
              <div class='col-md'>
                <blockquote class='bg-white rounded shadow mb-4 p-4 p-lg-5 text-center'>
                  <img
                    class='avatar avatar-md mb-4'
                    src='https://lh3.googleusercontent.com/a-/AAuE7mBBiHplEnGExL31RVTkYSSokdOAa7dI1JihW3xe=w96-h96-n-rw'
                    alt='Hazken Graphics'
                  />
                  <p class='text-secondary'>
                    Great and amazing design, easy to select a movie, watch and
                    share, i really love this app.
                  </p>
                  <cite class='small text-uppercase'>Hazken Graphics</cite>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- end bg-skew --> */}

        <hr class='sep border-primary' role='presentation' />

        {/* <!-- Call to action --> */}
        <section class='container py-5'>
          <div class='text-center'>
            <h2 class='mb-4'>Have questions? Get in touch.</h2>
            <div class='mb-4'>
              <a
                class='btn btn-pill btn-primary'
                href='mailto:adelaja444@gmail.com'
                role='button'
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class='site-footer mt-5'>
        <div class='container'>
          <hr class='m-0' role='presentation' />

          <div class='d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-4'>
            <p class='small text-muted'>
              Copyright © 2020 foxtrailer by{' '}
              <a target='_blank' rel="noopener"
                href='https://portfolio.adescode.com'
              >
                Adescode
              </a>
            </p>
            <p class='small text-muted'>
              <Link to='/privacy'>Privacy Policy</Link>
            </p>
            <ul class='list-inline'>
              <li class='list-inline-item'>
                <a
                  class='icon icon-sm icon-secondary'
                  href='https://twitter.com/adescode'
                >
                  <i class='icon-inner fab fa-twitter' aria-hidden='true'></i>
                  <span class='sr-only'>Twitter</span>
                </a>
              </li>
              <li class='list-inline-item'>
                <a
                  class='icon icon-sm icon-secondary'
                  href='https://www.linkedin.com/in/adescode/'
                >
                  <i
                    class='icon-inner fab fa-linkedin-in'
                    aria-hidden='true'
                  ></i>
                  <span class='sr-only'>LinkedIn</span>
                </a>
              </li>
              <li class='list-inline-item'>
                <a
                  class='icon icon-sm icon-secondary'
                  href='https://github.com/adescode'
                >
                  <i class='icon-inner fab fa-github' aria-hidden='true'></i>
                  <span class='sr-only'>Github</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
