/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
// import { Image as NextImage } from 'next/image';
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

const DisplayQrcode: NextPage = () => {
  const [imgStr, setImgStr] = useState('');
  const [resultImgStr, setResultImgStr] = useState('');
  const [isgeneratedQrcode, setIsgeneratedQrcode] = useState(false);
  const [formValues, setFormValues] = useState({
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
    y_axis: '0.3',
    x_axis: '0.6',
  });

  async function handleOnClick() {
    console.log('clickled button');
    try {
      const response = await axios.get(
        'https://design-qrcode-api.herokuapp.com/api/get_sample'
      );
      setImgStr(response.data);
      setIsgeneratedQrcode(true);
      console.log('apiから返却されたデータ');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleOnAddImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const reader = new FileReader();
    const img: File = e.target.files[0];

    if (img == null) return;

    reader.readAsDataURL(img);
    reader.onload = () => {
      if (reader.result == null) return;
      console.log('フォームで選択された画像(base64)');
      console.log(reader.result);

      const data_uri = reader.result;
      console.log(data_uri);
      handleChange('img_string', data_uri);
      console.log(formValues);
    };
  }

  async function hundleSubmit() {
    console.log('execute onSubmit');
    console.log(formValues);
    try {
      const response = await axios.post(
        'https://design-qrcode-api.herokuapp.com/api/post_test2',
        formValues
      );
      setResultImgStr(response.data);
      setIsgeneratedQrcode(true);
      console.log('response.data');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(name: string, value: string | ArrayBuffer) {
    console.log(`${name};${value}`);
    setFormValues((prev) => ({ ...prev, [name]: value }));
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
          API動作確認サンプル
        </Text>

        {isgeneratedQrcode ? (
          <>
            <img
              src={`data:image/jpeg;base64,${resultImgStr}`}
              alt="デザインQRコード"
            />
            <Flex gap={12}>
              <Button
                onClick={() => {
                  setIsgeneratedQrcode(false);
                  setImgStr('');
                }}
                colorScheme="blue"
                mt="4"
              >
                やり直す
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
        ) : (
          <chakra.form pt={'4'} w={'xl'}>
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
            <Flex mt={4} gap="4">
              <Button
                colorScheme="teal"
                type="button"
                onClick={() => hundleSubmit()}
              >
                QRコードを作成する
              </Button>
              <Button
                colorScheme="facebook"
                onClick={() => {
                  console.log(formValues);
                }}
              >
                console.log(formValues);
              </Button>
            </Flex>
          </chakra.form>
        )}
      </Flex>
    </div>
  );
};

export default DisplayQrcode;
