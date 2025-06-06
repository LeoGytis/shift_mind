import subtract from "@/elements/vectors/subtract.svg";
import Image from "next/image";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  PathValue,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  defaultValue?: PathValue<T, Path<T>>;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldOnChange: (value: string) => void,
  ) => void;
}

const FormInput = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  placeholder,
  type = "text",
  className,
  onChange,
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <input
            {...field}
            type={type}
            value={field.value || ""}
            placeholder={placeholder}
            className={`bg-bgligth/20 border-greenlight placeholder:text-green-lightest w-full rounded-2xl border px-4 py-4.5 ${
              className || ""
            } ${fieldState?.error?.message && "!border-pink"}`}
            onChange={(e) => {
              field.onChange(e);
              if (onChange) {
                onChange(e, field.onChange);
              }
            }}
          />
          {fieldState?.error?.message && (
            <p className="text-pink mt-2 flex gap-2 text-sm">
              <Image
                src={subtract}
                alt="exclamation_icon"
                layout="intrinsic"
                className="object-contain"
              />
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FormInput;
