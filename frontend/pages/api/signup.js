// pages/api/signup.js
export default async function handler(req, res) {
    const url = "https://localhost:5000/users/signup";

    const response = await fetch(url, {
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
    });

    const data = await response.json();

    res.status(200).json(data);
}
