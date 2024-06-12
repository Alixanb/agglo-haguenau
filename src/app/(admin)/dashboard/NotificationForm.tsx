"use client";

import { Hr } from "@/components/layout/Elements";
import { Small } from "@/components/typos";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Grid } from "@/components/widgets/Grid";
import { getLocalAdminPassword } from "@/lib/client-utils";
import { NotificationSchema, NotificationType } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Info, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createNotificationAction } from "./notification.action";

export interface NotificationFormProps {
  defaultValues?: NotificationType;
  notificationId?: string;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  defaultValues,
  notificationId,
}) => {
  const router = useRouter();
  const isNew = !defaultValues;

  const form = useForm<z.infer<typeof NotificationSchema>>({
    resolver: zodResolver(NotificationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = async (data: z.infer<typeof NotificationSchema>) => {
    createNotificationAction(data, getLocalAdminPassword());

    toast({
      title: "Notification créée avec succés",
    });

    router.push("/dashboard");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-4 w-full flex flex-col flex-1 grow"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Titre</FormLabel>
              <FormControl>
                <Input placeholder="Titre de la notification" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description de la notification"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Hr />
        <Small className="leading-normal mr-2 mb-2">
          <Info className="size-4 my-2" />
          Les dates ci-dessous permettent d&apos;indiquer à partir de quand la
          notification sera visible et notifiera les utilisateurs, et
          jusqu&apos;à quand.
          <br /> Elle est aussi significative de la période dont cette
          information est importante.
        </Small>
        <FormField
          control={form.control}
          name="dateFrom"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date de début</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatDate(field.value)
                      ) : (
                        <span>Choisissez une date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateTo"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date de fin</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatDate(field.value)
                      ) : (
                        <span>Choisissez une date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Hr />
        <FormField
          control={form.control}
          name="link"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Lien</FormLabel>
              <FormControl>
                <Input placeholder="Lien de la notification" {...field} />
              </FormControl>
              <FormDescription>
                Lien vers lequel la notification renvoie
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Grid cols="2">
          <Button type="reset" variant="outline">
            Annuler
          </Button>
          <Button type="submit" className="flex gap-2">
            <Save className="size-4" />
            {isNew ? "Sauvegarder" : "Modifier"}
          </Button>
        </Grid>
      </form>
    </Form>
  );
};

export default NotificationForm;
