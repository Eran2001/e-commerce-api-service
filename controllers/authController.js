export const registerUser = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({
      message: "Username, password, and role are required",
    });
  }

  console.log(`New ${role} registered: ${username}`);

  return res.status(201).json({
    message: `Welcome onboard ${username} (${role})`,
  });
};
