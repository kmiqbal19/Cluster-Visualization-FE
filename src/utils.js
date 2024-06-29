// utils.js
export const transformData = (data) => {
    const clusters = {};
  
    data.forEach(item => {
      const { cluster, PMID } = item;
      if (!clusters[cluster]) {
        clusters[cluster] = [];
      }
      clusters[cluster].push(PMID);
    });
  
    const formattedData = Object.keys(clusters).map(cluster => ({
      label: `Cluster ${cluster}`,
      groups: clusters[cluster].map(PMID => ({ label: PMID }))
    }));
  
    return formattedData;
  };
  