import supabase from "./supabase";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

export async function getFriends(userID) {
  // let query = supabase.from("Friends").select("*");
  let query = supabase.from("Friends").select("*").eq("userID", userID);

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Friends could not be loaded");
  }

  return data;
}

export async function addFriend(newFriend) {
  const imageName = `${Math.random()}-${newFriend.image.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  const { data, error } = await supabase
    .from("Friends")
    .insert([{ ...newFriend, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Friend could not be added");
  }

  const { error: storageError } = await supabase.storage
    .from("images")
    .upload(imageName, newFriend.image);

  if (storageError) {
    await supabase.from("Friends").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Friends image could not be uploaded and the friend was not added"
    );
  }

  return data;
}

export async function updateBalance(newBalance, id) {
  const { data, error } = await supabase
    .from("Friends")
    .update({ ...newBalance })
    .eq("id", id);

  if (error) {
    console.error("Error updating balance:", error);
    throw new Error("Could not update balance");
  }

  return data;
}

export async function deleteFriend(id) {
  const { data, error } = await supabase.from("Friends").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Friend could not be deleted");
  }

  return data;
}
