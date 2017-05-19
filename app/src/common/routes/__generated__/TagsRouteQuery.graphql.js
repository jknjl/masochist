/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule TagsRouteQuery.graphql
 * @generated SignedSource<<69a998f09b6460c07b1c6886449fafea>>
 * @relayHash 1d86d223d01db1a8cdfd1b0a6a3d71ce
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query TagsRouteQuery(
  $count: Int!
) {
  ...TagsIndex
}

fragment TagsIndex on Root {
  tags(first: $count) {
    count
    edges {
      node {
        id
        name
        ...TagPreview
      }
    }
  }
}

fragment TagPreview on Tag {
  count
  name
  url
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagsRouteQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TagsIndex",
        "args": null
      }
    ],
    "type": "Root"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "TagsRouteQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "TagsRouteQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          }
        ],
        "concreteType": "TagConnection",
        "name": "tags",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "count",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "TagEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "count",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query TagsRouteQuery(\n  $count: Int!\n) {\n  ...TagsIndex\n}\n\nfragment TagsIndex on Root {\n  tags(first: $count) {\n    count\n    edges {\n      node {\n        id\n        name\n        ...TagPreview\n      }\n    }\n  }\n}\n\nfragment TagPreview on Tag {\n  count\n  name\n  url\n}\n"
};

module.exports = batch;