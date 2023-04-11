const getHeader = () => {
  return {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
};

export default getHeader;
