import Dogs from '../models/dogSchema.mjs';

//Functions
const CreateDog = async (req, res) => {
  try {
    let newDog = new Dogs(req.body);

    await newDog.save();

    res.json(newDog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const ReadDog = async (req, res) => {
  try {
    //Get data dn save to variable
    const allDogs = await Dogs.find({});
    //Send data to front end: res
    res.json(allDogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const UpdateDog = async (req, res) => {
  try {
    const updatedDog = await Dogs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedDog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};

const DeleteDog = async (req, res) => {
  try {
    await Dogs.findByIdAndDelete(req.params.id);

    res.status(200).json({ msg: 'Item Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server Error` });
  }
};
export default { CreateDog, ReadDog, UpdateDog, DeleteDog };
