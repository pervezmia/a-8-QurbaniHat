"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiUser } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";

const BookNow = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const image = e.target.image.value;

    // console.log({ name, image });

    // await authClient.updateUser({
    //   name,
    //   image,
    // });
    toast.success("Successfully Booked!");
  };
  return (<Modal>
      <Button variant="secondary">Book Now</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <MdFavoriteBorder className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Booking Info</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="gmail" type="gmail">
                    <Label>Gmail</Label>
                    <Input placeholder="Enter your photo gmail" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Photo Url</Label>
                    <Input placeholder="Enter your photo url" />
                  </TextField>
                  <TextField className="w-full" name="address" type="text">
                    <Label>Address</Label>
                    <Input placeholder="Enter your address" />
                  </TextField>

                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                  
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>)
};

export default BookNow;
