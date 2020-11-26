const Poll = require("../models/polls");
const { options } = require("../routes/polls");

exports.showPolls = async (req, res, next) => {
  try {
    const polls = await Poll.find();
    console.log(polls);
    res.status(200).json(polls);
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.createPolls = async (req, res, next) => {
  try {
    const { question, options } = req.body;
    const polls = await Poll.create({
      question,
      options: options.map((option) => ({ option, votes: [] })),
    });
    polls.save((err, polls) => {
      if (err) {
        res.status(400).json({
          error: "Saving Poll in DB failed",
        });
      }
      res.json(polls);
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.getPoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    console.log(pollId);
    const polls = await Poll.findById(pollId);
    if (!polls) throw new Error("no polls found");
    res.status(200).json(polls);
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.deletePoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    // console.log(pollId);
    const polls = await Poll.findById(pollId);
    if (!polls) {
      throw new Error("no Polls found");
    } else {
      await polls.remove();
      res.status(202).json({
        error: "Poll deleted successfully",
      });
    }
  } catch (error) {
    res.status = 400;
    next(error);
  }
};

exports.votes = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const { userId } = req.body;
    var { answer } = req.body;
    if (answer) {
      ///Finf the Poll
      const poll = await Poll.findById(pollId);

      // if (!poll) throw new Error("no Poll Found");
      // console.log(poll);

      console.log(poll.options);
      const vote = poll.options.map((op) => {
        if (op.option === answer) {
          console.log("yes");
        }
      });
    }
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
