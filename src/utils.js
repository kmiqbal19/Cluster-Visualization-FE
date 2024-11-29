export const transformData = (data) => {
  const clusters = {};
  const clusterTopics = {};

  data.forEach((item) => {
    const { cluster, PMID, TOPIC, cluster_topic } = item;
    if (!clusters[cluster]) {
      clusters[cluster] = [];
      clusterTopics[cluster] = cluster_topic;
    }
    clusters[cluster].push({ PMID, TOPIC });
  });

  const formattedData = Object.keys(clusters).map((cluster) => ({
    label: ` ${clusterTopics[cluster]}`,
    groups: clusters[cluster].map(({ PMID, TOPIC }) => ({ label: TOPIC })),
  }));

  return formattedData;
};
