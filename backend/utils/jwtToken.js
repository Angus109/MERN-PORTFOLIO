export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
const COOKIE_EXPIRE = 90;

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};

