import { useState } from "react";
import BNIYucatanRegistro from "./BNIForm";
import SelectRegisterType from "./SelectRegisterType";
export default function RegistroBNI() {
  const [registerType, setRegisterType] = useState(null);

  return (
    <div>
      {!registerType && <SelectRegisterType onSelect={setRegisterType} />}

      {registerType && <BNIYucatanRegistro registerType={registerType} />}
    </div>
  );
}
