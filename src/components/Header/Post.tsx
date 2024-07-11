import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { createPostSchema } from "@/lib/schema";
import { convertErrors } from "@/lib/utils";
import { useAppDispatch } from "@/hooks/useRedux";
import { addNews } from "@/features/news/newsSlice";

export default function Post() {
  const [errors, setErrors] = React.useState<Record<string, string>[]>();
  const [open, setOpen] = React.useState(false);

  const dispatch = useAppDispatch();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      title: { value: string };
      body: { value: string };
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      title: target.title.value,
      body: target.body.value,
    };

    const validate = createPostSchema.safeParse(formData);

    if (validate.success) {
      dispatch(
        addNews({
          id: uuidv4(),
          ...validate.data,
        }),
      );
      setOpen(false);
    } else {
      setErrors(convertErrors(validate.error.errors));
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className={buttonVariants()}>Post a News</div>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Post a News</DialogTitle>
            <DialogDescription>
              Post and share news quickly to keep everyone informed and updated.
            </DialogDescription>
          </DialogHeader>

          {errors && (
            <div className="p-4 rounded-lg bg-red-50 text-red-900">
              <ul className="space-y-2 list-disc list-inside">
                <h2 className="font-bold">Errors:</h2>
                {errors.map((error, idx) => (
                  <li key={idx}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <Input name="name" type="text" placeholder="Full Name" />
              <Input name="email" type="email" placeholder="Email" />
            </div>

            <fieldset className="p-4 space-y-2 border rounded-lg">
              <legend>
                <h2 className="font-bold">Post Information</h2>
              </legend>

              <Input name="title" type="text" placeholder="Post Title" />
              <Textarea name="body" placeholder="Post Body" />
            </fieldset>
          </div>

          <DialogFooter>
            <Button>Post</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
