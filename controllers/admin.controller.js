import Subscription from "../models/Subscription.js";
import User from "../models/User.js";

export const getUserSubscriptions = async (req, res) => {
  try {
    const { id: userId } = req.params;

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const subscriptions = await Subscription.find({ userId }).populate(
      "userId",
      "-password",
    );

    res.status(200).json({
      user,
      totalSubscriptions: subscriptions.length,
      subscriptions,
    });
  } catch (error) {
    console.log("Error in getUserSubscriptions controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
