"use client";

{/* Biblioteca react-hook-form */ }
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react'; 

{/* Tipo dos dados */ }
type FormData = {
  name: string;
  profession: string;
  age: number;
  weight: number;
  gender: 'male' | 'female' | 'other';
  height: number;
  symptoms: string[];
  complaintDuration: number;
  childhoodDiseases: string[];
  allergies: string[];
  mealFrequency: string;
  powerType: string;
  waterConsumption: string;
  foodPreferences: string[];
  familyHistory: string[];
};

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const {
    
    handleSubmit,  // Função para lidar com a submissão do formulário.
    register, // Função para registrar campos de entrada no formulário.
    formState: { errors }, // Objeto contendo os erros do formulário.
  } = useForm<FormData>({ // Utiliza o hook useForm do react-hook-form, onde "FormData" é o tipo dos dados do formulário.
    defaultValues: { // inicializacao dos valores dos arrays, tbm pode botar outros
      childhoodDiseases: [],
      allergies: [],
      symptoms: [],
      foodPreferences: [],
      familyHistory: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
    setShowPopup(true);
  };


  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  return (
    <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Formulário para paciente
        </h2>

      </div>


      {/* Comeco do formulario */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        {/* Dados de identificacao */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Dados de Identificação.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome Completo
            </label>
            <div className="mt-2.5">
              <input
                {...register("name", {
                  required: "Nome é requerido.",
                  minLength: {
                    value: 5,
                    message: "Nome precisa ter pelo menos 5 caracteres",
                  },
                })}
                type="text"
                name="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.name && (
                <span className="text-red-700">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Idade
            </label>
            <div className="mt-2.5">
              <input
                {...register("age", {
                  required: "Idade é requerido.",
                })}
                type="number"
                name="age"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.age && (
                <span className="text-red-700">{errors.age.message}</span>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="profession"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Profissão
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="profession"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="gender"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Sexo
            </label>
            <div className="mt-2.5">
              <select
                {...register("gender", {
                  required: "Sexo é requerido.",
                })}
                id="gender"
                name="gender"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione o sexo</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Outro</option>
              </select>
            </div>
            {errors?.gender && (
              <span className="text-red-700">{errors.gender.message}</span>
            )}
          </div>

          <div>
            <label
              htmlFor="height"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Altura (em centímetros)
            </label>
            <div className="mt-2.5">
              <input
                {...register("height", {
                  required: "Altura é requerida.",
                })}
                type="number"
                name="height"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.height && (
                <span className="text-red-700">{errors.height.message}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Peso (em kg)
            </label>
            <div className="mt-2.5">
              <input
                {...register("weight", {
                  required: "Peso é requerido.",
                })}
                type="number"
                step="0.01"
                name="weight"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.weight && (
                <span className="text-red-700">{errors.weight.message}</span>
              )}
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Dados de Queixa
            </p>
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="symptoms"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Sintomas que você sente
            </label>
            <div className="mt-2.5">
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="dorCabeca"
                  value="dorCabeca"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="dorCabeca" className="text-gray-900">
                  Dor de cabeça
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="doresCorpo"
                  value="doresCorpo"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="doresCorpo" className="text-gray-900">
                  Dores no corpo
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="febre"
                  value="febre"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="febre" className="text-gray-900">
                  Febre
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="cansaco"
                  value="cansaco"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="cansaco" className="text-gray-900">
                  Cansaço
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="faltaDeAr"
                  value="faltaDeAr"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="faltaDeAr" className="text-gray-900">
                  Falta de ar
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="dorAbdominal"
                  value="dorAbdominal"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="dorAbdominal" className="text-gray-900">
                  Dor abdominal
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="tontura"
                  value="tontura"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="tontura" className="text-gray-900">
                  Tontura
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="enjoo"
                  value="enjoo"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="enjoo" className="text-gray-900">
                  Enjoo
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="vomitos"
                  value="vomitos"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="vomitos" className="text-gray-900">
                  Vômitos
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="diarreia"
                  value="diarreia"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="diarreia" className="text-gray-900">
                  Diarreia
                </label>
              </div>
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="sangramento"
                  value="sangramento"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="sangramento" className="text-gray-900">
                  Sangramento
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="probRespiratorios"
                  value="probRespiratorios"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="probRespiratorios" className="text-gray-900">
                  Problemas respiratórios
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="lesaoOuTrauma"
                  value="lesaoOuTrauma"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="lesaoOuTrauma" className="text-gray-900">
                  Lesão ou trauma
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="disturbiosSono"
                  value="disturbiosSono"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="disturbiosSono" className="text-gray-900">
                  Distúrbios do sono
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="altPeso"
                  value="altPeso"
                  {...register("symptoms")}
                  className="mr-1"
                />
                <label htmlFor="altPeso" className="text-gray-900">
                  Alterações no peso
                </label>
              </div>








              {/* Adicione mais sintomas conforme necessário */}


              {/* Adicione mais sintomas conforme necessário */}
            </div>
            {errors?.symptoms && (
              <span className="text-red-700">{errors.symptoms.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="complaintDuration"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Duração do(s) sintoma(s) (em dias)
            </label>
            <input
              {...register("complaintDuration", {
                required: "A duração da queixa é obrigatória.",
                min: { value: 1, message: "A duração deve ser maior que zero." },
                pattern: {
                  value: /^\d+$/,
                  message: "A duração deve ser um número positivo.",
                },
              })}
              type="number"
              name="complaintDuration"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors?.complaintDuration && (
              <span className="text-red-700">{errors.complaintDuration.message}</span>
            )}
          </div>

          {/* Dados de Historico */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Dados de Histórico
            </p>
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="childhoodDiseases"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Histórico de Doenças
            </label>
            <div className="mt-2.5">
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="sarampo"
                  value="sarampo"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="sarampo" className="text-gray-900">
                  Sarampo
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="catapora"
                  value="catapora"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="catapora" className="text-gray-900">
                  Catapora
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="caxumba"
                  value="caxumba"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="caxumba" className="text-gray-900">
                  Caxumba
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="rubéola"
                  value="rubéola"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="rubéola" className="text-gray-900">
                  Rubéola
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="coqueluche"
                  value="coqueluche"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="coqueluche" className="text-gray-900">
                  Coqueluche
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="varicela"
                  value="varicela"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="varicela" className="text-gray-900">
                  Varicela
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="poliomielite"
                  value="poliomielite"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="poliomielite" className="text-gray-900">
                  Poliomielite
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="hepatiteA"
                  value="hepatiteA"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="hepatiteA" className="text-gray-900">
                  Hepatite A
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="meningite"
                  value="meningite"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="meningite" className="text-gray-900">
                  Meningite
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="febreAmarela"
                  value="febreAmarela"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="febreAmarela" className="text-gray-900">
                  Febre Amarela
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="tuberculose"
                  value="tuberculose"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="tuberculose" className="text-gray-900">
                  Tuberculose
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="hepatiteB"
                  value="hepatiteB"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="hepatiteB" className="text-gray-900">
                  Hepatite B
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="difteria"
                  value="difteria"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="difteria" className="text-gray-900">
                  Difteria
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="tétano"
                  value="tétano"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="tétano" className="text-gray-900">
                  Tétano
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="asma"
                  value="asma"
                  {...register("childhoodDiseases")}
                  className="mr-1"
                />
                <label htmlFor="asma" className="text-gray-900">
                  Asma
                </label>
              </div>



              {/* Adicione mais doencas aqui */}

            </div>
            {errors?.childhoodDiseases && (
              <span className="text-red-700">{errors.childhoodDiseases.message}</span>
            )}
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="allergies"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Histórico de Alergias
            </label>
            <div className="mt-2.5">
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="rinite"
                  value="rinite"
                  {...register("allergies")}
                  className="mr-1"
                />
                <label htmlFor="rinite" className="text-gray-900">
                  Rinite
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="dermatite"
                  value="dermatite"
                  {...register("allergies")}
                  className="mr-1"
                />
                <label htmlFor="dermatite" className="text-gray-900">
                  Dermatite
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="alergiaAlimentar"
                  value="alergiaAlimentar"
                  {...register("allergies")}
                  className="mr-1"
                />
                <label htmlFor="alergiaAlimentar" className="text-gray-900">
                  Alergia Alimentar
                </label>
              </div>


              {/* Adicione mais alergias conforme necessário */}
            </div>
            {errors?.allergies && (
              <span className="text-red-700">{errors.allergies.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="familyHistory"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Antecedentes Familiares
            </label>
            <div className="mt-2.5">
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="pressaoAlta"
                  value="pressaoAlta"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="pressaoAlta" className="text-gray-900">
                  Pressão Alta
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="doencaCoração"
                  value="doencaCoração"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="doencaCoração" className="text-gray-900">
                  Doença do Coração
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="doencaRins"
                  value="doencaRins"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="doencaRins" className="text-gray-900">
                  Doença dos Rins
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="neoplasia"
                  value="neoplasia"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="neoplasia" className="text-gray-900">
                  Neoplasia (Câncer)
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="diabetes"
                  value="diabetes"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="diabetes" className="text-gray-900">
                  Diabetes
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="epilepsia"
                  value="epilepsia"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="epilepsia" className="text-gray-900">
                  Epilepsia
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="dislipidemia"
                  value="dislipidemia"
                  {...register("familyHistory")}
                  className="mr-1"
                />
                <label htmlFor="dislipidemia" className="text-gray-900">
                  Dislipidemia
                </label>
              </div>

              {/* Adicione mais antecedentes familiares conforme necessário */}
            </div>
            {errors?.familyHistory && (
              <span className="text-red-700">{errors.familyHistory.message}</span>
            )}
          </div>



          {/* Habitos alimentares */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Hábitos alimentares
            </p>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="mealFrequency"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Selecione a frequência de suas refeições
            </label>
            <div className="mt-2.5">
              <select
                {...register("mealFrequency", {
                  required: "Frequência de refeições é requerida",
                })}
                id="mealFrequency"
                name="mealFrequency"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione a frequência</option>
                <option value="irregular">Varia diariamente (irregular)</option>
                <option value="3">3 vezes ao dia</option>
                <option value="5">5 vezes ao dia</option>
                <option value="mais de 5">Mais de 5 vezes por dia</option>
              </select>
            </div>
            {errors?.mealFrequency && (
              <span className="text-red-700">{errors.mealFrequency.message}</span>
            )}
          </div>


          <div className="sm:col-span-2">
            <label
              htmlFor="powerType"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Tipo de alimentação
            </label>
            <div className="mt-2.5">
              <select
                {...register("powerType", {
                  required: "Tipo de alimentação é requerido",
                })}
                id="powerType"
                name="powerType"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione seu tipo de alimentação</option>
                <option value="Vegetariano">Vegetariano</option>
                <option value="Vegano">Vegano</option>
                <option value="Onívoro"> Onívoro</option>
                <option value="Outro"> Outro</option>
              </select>
            </div>
            {errors?.powerType && (
              <span className="text-red-700">{errors.powerType.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="waterConsumption"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Consumo de água
            </label>
            <div className="mt-2.5">
              <select
                {...register("waterConsumption", {
                  required: "Consumo de água é requerido",
                })}
                id="waterConsumption"
                name="waterConsumption"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione seu consumo de água</option>
                <option value="Menos-de-1L">Menos de 1L por dia</option>
                <option value="1-2-L">1-2 L por dia</option>
                <option value="Mais-de-2L"> Mais de 2L por dia</option>
              </select>
            </div>
            {errors?.waterConsumption && (
              <span className="text-red-700">{errors.waterConsumption.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="foodPreferences"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Preferências Alimentares
            </label>
            <div className="mt-2.5">
              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="carnes"
                  value="carnes"
                  {...register("foodPreferences")}
                  className="mr-1"
                />
                <label htmlFor="carnes" className="text-gray-900">
                  Carnes
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="peixesFrutosMar"
                  value="peixesFrutosMar"
                  {...register("foodPreferences")}
                  className="mr-1"
                />
                <label htmlFor="peixesFrutosMar" className="text-gray-900">
                  Peixes e frutos do mar
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="produtosLacteos"
                  value="produtosLacteos"
                  {...register("foodPreferences")}
                  className="mr-1"
                />
                <label htmlFor="produtosLacteos" className="text-gray-900">
                  Produtos lácteos
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="frutasVegetais"
                  value="frutasVegetais"
                  {...register("foodPreferences")}
                  className="mr-1"
                />
                <label htmlFor="frutasVegetais" className="text-gray-900">
                  Frutas e vegetais
                </label>
              </div>

              <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '10px', display: 'inline-block', marginRight: '10px' }}>
                <input
                  type="checkbox"
                  id="graosCereais"
                  value="graosCereais"
                  {...register("foodPreferences")}
                  className="mr-1"
                />
                <label htmlFor="graosCereais" className="text-gray-900">
                  Grãos e cereais
                </label>
              </div>

              {/* Adicione mais opções conforme necessário */}
            </div>
            {errors?.foodPreferences && (
              <span className="text-red-700">{errors.foodPreferences.message}</span>
            )}
          </div>














        </div>
        <div className="flex gap-2 m-4 items-center">
          <input
            type="checkbox"
            name="privacePolicy"
            className="text-sm leading-6 text-gray-600 border rounded-sm shadow-sm"
          />
          <p className="text-slate-600">
            Você aceita nossa{" "}
            <a href="#" className="font-semibold text-indigo-600">
              Política&nbsp;Privacidade
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
      {/* Popup para exibir após o envio do formulário */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-lg font-semibold mb-2">Formulário Enviado!</p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              onClick={() => setShowPopup(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}