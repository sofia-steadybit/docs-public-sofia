/*
 * Copyright 2020 chaosmesh GmbH. All rights reserved.
 */

import {graphql, StaticQuery} from 'gatsby';
import React from 'react';
import config from '../../config.js';
import Link from './link';

import Search from './search/index';
import Sidebar from "./sidebar";
import './styles.css';

const isSearchEnabled = Boolean(config.header.search && config.header.search.enabled);

let searchIndices = [];
if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push(
    {name: `${config.header.search.indexName}`, title: `Results`, hitComp: `PageHit`},
  );
}

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('../assets/images/brand.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            logo,
            headerLinks,
          }
        }
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault box'}>
            <div className={'navbar-header navBarHeader'}>
              <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                {logo.image !== '' ?
                  (<img className={'img-responsive'} src={logo.image} alt={'logo'}/>)
                  :
                  (<img className={'img-responsive'} src={logoImg} alt={'logo'}/>)
                }
                <div className={"headerTitle"} dangerouslySetInnerHTML={{__html: headerTitle}}/>
              </Link>
              <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                | Docs
              </Link>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                      aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hidden-xs navBarUL'}>
                <Search collapse indices={searchIndices}/>
              </div>
            ) : null}
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location}/>
                <hr/>
                {isSearchEnabled ? (
                  <div className={'searchWrapper navBarUL'}>
                    <Search collapse indices={searchIndices}/>
                  </div>
                ) : null}
              </div>
              <ul className={'nav navbar-nav navBarUL navBarNav navbar-right navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a href={link.link} target="_blank" dangerouslySetInnerHTML={{__html: link.text}}/>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </nav>
          <div className={'boxGitter'}>
          </div>
        </div>
      );
    }}
  />
);

export default Header;
