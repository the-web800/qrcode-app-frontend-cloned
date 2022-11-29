import type { NextPage } from 'next';
import { Image as NextImage } from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {
  chakra,
  Heading,
  Text,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Button,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiDownload } from 'react-icons/bi';

const Full: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [formValues, setFormValues] = useState({
    file_path: '',
    img_string: '',
    data: 'https://www.okayama-u.ac.jp',
    version: '5',
    ecc_level: '0',
    encoding: '0',
    mask_pattern: '0',
    traial_times: '100',
    threshold: '96',
    scale: '50',
    variance: '0.7',
    y_axis: '0.5',
    x_axis: '0.5',
  });
  const [resultImgStr, setresultImgStr] = useState('');
  const [selectedImgStr, setSelectedImgStr] = useState('');
  const [isDisplayResult, setIsDisplayResult] = useState(false);
  const [selectedImageSize, setSelectedImageSize] = useState({ x: 0, y: 0 });
  const [crop, setCrop] = useState<Crop>({
    unit: 'px', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  function handleChange(name, value) {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit() {
    console.log(formValues);
    try {
      const response = await axios.post(
        'http://localhost:8080/api/post_test2',
        formValues
      );
      setresultImgStr(response.data);
      setIsDisplayResult(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function onClickCheckButton() {
    // console.log(formValues);
    // try {
    //   const response = await axios.get("http://localhost:8080/api/qr-test");
    //   setresultImgStr(response.data);
    //   setIsDisplayResult(true);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    const image = new Image();
    image.src = selectedImgStr;
    const size = { width: image.width, height: image.height };
    console.log(size);
  }

  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const reader = new FileReader();
    const img: File = e.target.files[0];
    const image = new Image();
    reader.readAsDataURL(img);
    reader.onload = () => {
      if (reader.result == null) return;
      console.log(reader.result);
      setSelectedImgStr(reader.result);

      const data_uri = reader.result;
      if (data_uri == null) return;
      handleChange('img_string', data_uri);
    };
  };

  async function postData() {
    try {
      const response = await axios.post('http://localhost:8080/api/post_test', {
        file_path: 'src/main/resources/img/abe.jpg',
        data: 'https://www.okayama-u.ac.jp',
        version: '5',
        ecc_level: '0',
        encoding: '0',
        mask_pattern: '0',
        traial_times: '100',
        threshold: '96',
        scale: '50',
        variance: '0.7',
        y_axis: '0.3',
        x_axis: '0.6',
      });
      setresultImgStr(response.data);
      setIsDisplayResult(true);
      console.log(typeof response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Head>
        <title>Design QRcode Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDirection={'column'} alignItems={'center'} py={'12'}>
        <Heading size={'3xl'}>Design QRcode Generator</Heading>

        <Text fontSize={'2xl'} pt={'4'}>
          デザインQRコードを生成するアプリです
        </Text>

        {!isDisplayResult ? (
          <chakra.form onSubmit={handleSubmit(onSubmit)} pt={'4'} w={'xl'}>
            <FormControl>
              <FormLabel htmlFor="name">背景に設定する画像</FormLabel>
              <Input
                type="file"
                accept="image/*,.png,.jpg,.jpeg,"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleOnAddImage(e);
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">data</FormLabel>
              <Input
                id="data"
                variant="filled"
                value={formValues.data}
                placeholder="data"
                onChange={(e) => handleChange('data', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">version</FormLabel>
              <Input
                id="version"
                variant="filled"
                value={formValues.version}
                placeholder="version"
                onChange={(e) => handleChange('version', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">ecc_level</FormLabel>
              <Input
                id="ecc_level"
                variant="filled"
                value={formValues.ecc_level}
                placeholder="ecc_level"
                onChange={(e) => handleChange('ecc_level', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">encoding</FormLabel>
              <Input
                id="encoding"
                variant="filled"
                value={formValues.encoding}
                placeholder="encoding"
                onChange={(e) => handleChange('encoding', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">mask_pattern</FormLabel>
              <Input
                id="mask_pattern"
                variant="filled"
                value={formValues.mask_pattern}
                placeholder="mask_pattern"
                onChange={(e) => handleChange('mask_pattern', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">traial_times</FormLabel>
              <Input
                id="traial_times"
                variant="filled"
                value={formValues.traial_times}
                placeholder="traial_times"
                onChange={(e) => handleChange('traial_times', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">threshold</FormLabel>
              <Input
                id="threshold"
                variant="filled"
                value={formValues.threshold}
                placeholder="threshold"
                onChange={(e) => handleChange('threshold', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">scale</FormLabel>
              <Input
                id="scale"
                variant="filled"
                value={formValues.scale}
                placeholder="scale"
                onChange={(e) => handleChange('scale', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">variance</FormLabel>
              <Input
                id="variance"
                variant="filled"
                value={formValues.variance}
                placeholder="variance"
                onChange={(e) => handleChange('variance', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">y_axis</FormLabel>
              <Input
                id="y_axis"
                variant="filled"
                value={formValues.y_axis}
                placeholder="y_axis"
                onChange={(e) => handleChange('y_axis', e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">x_axis</FormLabel>
              <Input
                id="x_axis"
                variant="filled"
                value={formValues.x_axis}
                placeholder="x_axis"
                onChange={(e) => handleChange('x_axis', e.target.value)}
              />
            </FormControl>

            {/* <FormControl >
            <FormLabel htmlFor="name">画像を選択してください．</FormLabel>
            <Input id="name" type="file" />
          </FormControl> */}
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            <Button mt={4} colorScheme="teal" onClick={onClickCheckButton}>
              Check
            </Button>
          </chakra.form>
        ) : null}

        {isDisplayResult ? (
          <>
            <NextImage
              src={`data:image/jpeg;base64,${resultImgStr}`}
              alt="デザインQRコードです"
              width={400}
              height={400}
            />
            <Flex gap={12}>
              <Button
                mt={4}
                colorScheme="blue"
                onClick={() => {
                  setIsDisplayResult(false);
                }}
              >
                別の画像で試す
              </Button>
              <Button
                as="a"
                href={`data:image/jpeg;base64,${resultImgStr}`}
                download
                bgColor="green.500"
                color="white"
                mt="4"
                mr="4"
                _hover={{
                  color: 'blue.500',
                  bgColor: 'white',
                  border: '1px',
                  borderColor: 'blue.500',
                }}
              >
                <BiDownload size="30px" />
              </Button>
            </Flex>
          </>
        ) : null}
      </Flex>
    </div>
  );
};

export default Full;
