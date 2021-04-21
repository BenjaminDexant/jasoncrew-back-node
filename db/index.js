const client = require('./client');

export const getArgonautes = async () => {
  try {
    return await client.db('jasoncrew').collection('argonautes').find().toArray();
  } catch (err) {
    throw new Error(err);
  }
};

export const addArgonautes = async (newArgonaute) => {
  try {
    return await client.db('jasoncrew').collection('argonautes').insertOne(newArgonaute);
  } catch (err) {
    throw new Error(err);
  }
};
