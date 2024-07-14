// utils.js
export const transformData = (data) => {
    const clusters = {};
  
    data.forEach(item => {
      const { cluster, PMID, TOPIC } = item;
      if (!clusters[cluster]) {
        clusters[cluster] = [];
      }
      clusters[cluster].push({PMID, TOPIC});
    });
     
    const formattedData = Object.keys(clusters).map(cluster => ({
      label: `Cluster ${cluster}`,
      groups: clusters[cluster].map(({PMID, TOPIC}) => ({ label: TOPIC }))
    }));
  
    return formattedData;
  };
  