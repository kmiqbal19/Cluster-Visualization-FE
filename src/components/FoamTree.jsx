import React, { useEffect, useRef, useState } from 'react';
import { transformData } from "../utils";
import { FoamTree } from '@carrotsearch/foamtree';

const FoamTreeComponent = ({ data }) => {
  const foamtreeRef = useRef(null);

  useEffect(() => {
    if (foamtreeRef.current) {
      const transformedData = transformData(data);
      const foamtree = new FoamTree({
        element: foamtreeRef.current,
        dataObject: { groups: transformedData },
      });

      return () => {
        if (foamtree) {
          foamtree.dispose();
        }
      };
    }
  }, [data]);

  return <div ref={foamtreeRef} style={{ width: '90vw', height: '700px', border: '1px solid black' }}></div>;
};

export default FoamTreeComponent;
