import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

export const userProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    console.log(userId);

    const subscriptions = await Subscription.find({ userId });
    console.log(subscriptions);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      totalSubscriptions: subscriptions?.length,
      user,
      subscriptions,
    });
  } catch (error) {
    console.log("Error in profile controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
