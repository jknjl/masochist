/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule ContentPreview.graphql
 * @generated SignedSource<<a6c6f1e1f8ec73e914e3752ef3787909>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ContentPreview = {|
  +__typename: string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentPreview",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArticlePreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PagePreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PostPreview",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SnippetPreview",
      "args": null
    }
  ],
  "type": "Content"
};

module.exports = fragment;