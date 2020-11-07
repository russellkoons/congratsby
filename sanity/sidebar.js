import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom sidebar
export default function Sidebar() {
  return S.list().title(`Slick's Slices`).items([
    // create a new subitem
    S.listItem()
      .title('Home Page')
      .icon(() => <strong>🔥</strong>),
  ])
}
