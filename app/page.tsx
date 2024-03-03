"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  name: string;
  profession: string;
  age: number;
  weight: number;
  gender: 'male' | 'female' | 'other';
  height: number;
  complaint: string;
  complaintFrequency: string;
  complaintIntensity: string;
  complaintDuration: number;
  childhoodDiseases: string[]; 
  allergies: string[];
};

export default function Home() {


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      childhoodDiseases: [],
      allergies: [], 
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
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
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
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
              Altura em metros
            </label>
            <div className="mt-2.5">
              <input
                {...register("height", {
                  required: "Altura é requerida.",
                })}
                type="number"
                step="0.01"
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
              Peso em kg
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
              htmlFor="complaint"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Qual é a sua queixa principal?
            </label>
            <div className="mt-2.5">
              <select
                {...register("complaint", {
                  required: "Por favor, selecione a queixa.",
                })}
                id="complaint"
                name="complaint"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Selecione sua queixa</option>
                <option value="dor-de-cabeca">Dor de cabeça</option>
                <option value="dores-no-corpo">Dores no corpo</option>
                <option value="febre">Febre</option>
                <option value="cansaco">Cansaço</option>
                <option value="falta-de-ar">Falta de ar</option>
                <option value="dor-abdominal">Dor abdominal</option>
                <option value="tontura">Tontura</option>
                <option value="enjoo">Enjoo</option>
                <option value="vomitos">Vômitos</option>
                <option value="diarreia">Diarreia</option>
                <option value="sangramento">Sangramento</option>
                <option value="problemas-respiratorios">Problemas respiratórios</option>
                <option value="lesao-ou-trauma">Lesão ou trauma</option>
                <option value="disturbios-sono">Distúrbios do sono</option>
                <option value="alteracoes-no-peso">Alterações no peso</option>
                <option value="problemas-dermatologicos">Problemas dermatológicos</option>
                <option value="dificuldade-urinaria">Dificuldade urinária</option>
                <option value="problemas-visuais">Problemas visuais</option>
                <option value="ansiedade">Ansiedade</option>
                <option value="depressao">Depressão</option>
                <option value="outros">Outros</option>

              </select>
            </div>
            {errors?.complaint && (
              <span className="text-red-700">{errors.complaint.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="complaintFrequency"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Frequência da queixa principal
            </label>
            <select
              {...register("complaintFrequency", {
                required: "A frequência da queixa é obrigatória.",
              })}
              id="complaintFrequency"
              name="complaintFrequency"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecione a frequência da queixa</option>
              <option value="diária">Diária</option>
              <option value="semanal">Semanal</option>
              <option value="mensal">Mensal</option>

            </select>
            {errors?.complaintFrequency && (
              <span className="text-red-700">{errors.complaintFrequency.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="complaintIntensity"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Intensidade da queixa principal
            </label>
            <select
              {...register("complaintIntensity", {
                required: "A intensidade da queixa é obrigatória.",
              })}
              id="complaintIntensity"
              name="complaintIntensity"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">Selecione a intensidade da queixa</option>
              <option value="leve">Leve</option>
              <option value="moderada">Moderada</option>
              <option value="intensa">Intensa</option>
            </select>
            {errors?.complaintIntensity && (
              <span className="text-red-700">{errors.complaintIntensity.message}</span>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="complaintDuration"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Duração da queixa principal (em dias)
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
    </div>
  );
}