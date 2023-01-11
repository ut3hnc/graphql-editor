//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { GraphQLEditor } from 'graphql-editor';
import { MainTheme } from 'graphql-editor';
import { PassedSchema } from 'graphql-editor';

const schemas = [
  `
type Person{
  name: String!
  firstName: String
  age: Int
}
`,
  `
type Person{
  name: String!
  age: Int
  firstName: String
}
`,
  `
type Person{
  name: String!
  age: Int
  firstName: String
  lastName:String
}
`,

  `
type Person{
  name: String!
  firstName: String
}
`,
];

export const CollabEffect = () => {
  const [currentSchema, setCurrentSchema] = useState<PassedSchema>({
    code: schemas[0],
    libraries: '',
  });
  useEffect(() => {
    setTimeout(
      () =>
        setCurrentSchema((cs) => ({
          ...cs,
          code: schemas[1],
        })),
      15000,
    );
    setTimeout(
      () =>
        setCurrentSchema((cs) => ({
          ...cs,
          code: schemas[2],
        })),
      10000,
    );
    setTimeout(
      () =>
        setCurrentSchema((cs) => ({
          ...cs,
          code: schemas[3],
        })),
      5000,
    );
  }, []);
  return (
    <div
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignSelf: 'stretch',
        display: 'flex',
        position: 'relative',
      }}
    >
      <GraphQLEditor
        schema={currentSchema}
        sidebarExpanded
        setSchema={(s) => {
          setCurrentSchema(s);
        }}
        diffSchemas={{
          '1.0': schemas.googleDirectionsNew,
          '1.1': schemas.googleDirectionsOld,
          '1.2': schemas.googleDirectionsNew,
          '2.0': schemas.googleDirectionsOld,
          '2.5': schemas.googleDirectionsNew,
          '3.1': schemas.googleDirectionsOld,
          '3.2': schemas.googleDirectionsNew,
          '3.3': schemas.googleDirectionsOld,
          '3.4': schemas.googleDirectionsNew,
          '3.5': schemas.googleDirectionsOld,
          '3.6': schemas.googleDirectionsNew,
          '4.0': schemas.googleDirectionsOld,
          '5.0': schemas.googleDirectionsNew,
          '10.0': schemas.googleDirectionsOld,
        }}
      />
    </div>
  );
};

CollabEffect.description = 'Google Directions GraphQL Schema.';
