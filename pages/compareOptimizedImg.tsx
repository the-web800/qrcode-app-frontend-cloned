/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import Compressor from 'compressorjs';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';

const CompareOptimizedImg: NextPage = () => {
  enum DisplayMode {
    SelectImg = 'select img',
    DisplayImgs = 'display imgs',
  }

  const [compressedImgStr, setCompressedImgStr] = useState<
    string | ArrayBuffer
  >('');
  const [originalImgStr, setOriginalImgStr] = useState<string | ArrayBuffer>(
    ''
  );

  const [imgDataByte, setImgDataByte] = useState<{
    originalImg: number;
    compressedImg: number;
  }>({
    originalImg: 0,
    compressedImg: 0,
  });

  const [displayMode, setDisplayMode] = useState<DisplayMode>(
    DisplayMode.SelectImg
  );

  function handleChangeImgDataByte(name: string, value: number) {
    console.log(`${name};${value}`);
    setImgDataByte((prev) => ({ ...prev, [name]: value }));
  }

  function handleOnAddImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const compressed_reader = new FileReader();
    const originalReader = new FileReader();
    const originalImg: File = e.target.files[0];

    if (originalImg == null) return;

    new Compressor(originalImg, {
      quality: 0.5,

      success(result) {
        const compressedImg: File = result as File;

        console.log({ result });

        compressed_reader.readAsDataURL(compressedImg);
        compressed_reader.onload = () => {
          if (compressed_reader.result == null) return;
          console.log('圧縮後の画像(base64)');

          const compressed_data_uri = compressed_reader.result;
          console.log({ compressed_data_uri });
          setCompressedImgStr(compressed_data_uri);
          handleChangeImgDataByte(
            'compressedImg',
            Number(getBase64Size(compressed_data_uri)?.dataLength)
          );
        };
        setDisplayMode(DisplayMode.DisplayImgs);
      },
      error(err) {
        console.log(err.message);
      },
    });

    compressed_reader.readAsDataURL(originalImg);
    compressed_reader.onload = () => {
      if (compressed_reader.result == null) return;
      console.log('フォームで選択された画像(base64)');

      const original_data_uri = compressed_reader.result;
      console.log({ original_data_uri });
      setOriginalImgStr(original_data_uri);
      handleChangeImgDataByte(
        'originalImg',
        Number(getBase64Size(original_data_uri)?.dataLength)
      );
    };
    setDisplayMode(DisplayMode.DisplayImgs);
  }

  function getBase64Size(data: any) {
    try {
      let separetedDate = data.split(',');
      let mimeTypeData = separetedDate[0].match(/:(.*?);/);
      let mimeType = Array.isArray(mimeTypeData) ? mimeTypeData[0] : '';
      let decodedData = atob(separetedDate[1]);
      let dataLength = decodedData.length;

      return { mimeType, dataLength };
    } catch (errors) {
      console.log(errors);
      return;
    }
  }

  function roundFloat(input: number, digit = 100) {
    return Math.round(input * digit) / digit;
  }

  return (
    <chakra.div bgColor="#F4F4F4" height="100vh">
      <Head>
        <title>Design QRcode Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDirection={'column'} alignItems={'center'} py={'12'}>
        <Heading size={'3xl'}>Design QRcode Generator</Heading>
        {displayMode == DisplayMode.SelectImg && (
          <Box mt="24">
            <Text fontSize={'2xl'} pt={'4'} fontWeight="medium">
              サイズ比較をする画像を選択してください．
            </Text>
            <FormControl w="xl">
              <Input
                mt="4"
                borderColor="darkgray"
                fontWeight="black"
                type="file"
                accept="image/*,.png,.jpg,.jpeg,"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleOnAddImage(e);
                }}
              />
            </FormControl>
          </Box>
        )}
        {displayMode == DisplayMode.DisplayImgs && (
          <>
            <Text fontSize={'2xl'} pt={'4'}>
              圧縮前後の画像比較
            </Text>
            <Flex>
              <Box width="550px">
                <Text fontSize={'2xl'} pt={'4'} fontWeight="bold">
                  圧縮前の原画像
                </Text>
                <chakra.img
                  id="not-use-next-image"
                  src={`${originalImgStr}`}
                  alt="圧縮前の原画像"
                  objectFit="contain"
                  w="500px"
                  h="450px"
                />
                <Text fontSize={'2xl'} pt={'4'}>
                  データサイズ: {imgDataByte.originalImg} byte
                </Text>
              </Box>
              <Box>
                <Text fontSize={'2xl'} pt={'4'} fontWeight="bold">
                  圧縮後の画像
                </Text>
                <chakra.img
                  id="not-use-next-image"
                  src={`${compressedImgStr}`}
                  alt="圧縮後の原画像"
                  objectFit="contain"
                  w="500px"
                  h="450px"
                />
                <Text fontSize={'2xl'} pt={'4'}>
                  データサイズ: {imgDataByte.compressedImg} byte
                </Text>
              </Box>
            </Flex>
            <Text fontSize={'2xl'} pt={'4'} fontWeight="bold" color="blue.400">
              約
              {roundFloat(
                100 -
                  roundFloat(
                    (imgDataByte.compressedImg / imgDataByte.originalImg) * 100
                  )
              )}
              %のデータ量削減
            </Text>
            <Flex mt="4" gap="8">
              <Button
                onClick={() => {
                  setDisplayMode(DisplayMode.SelectImg);
                }}
                colorScheme="blackAlpha"
              >
                別の画像を選択する
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </chakra.div>
  );
};

export default CompareOptimizedImg;
