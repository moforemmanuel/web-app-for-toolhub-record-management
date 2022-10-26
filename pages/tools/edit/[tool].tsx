import FullPageLoader from '@/components/fullPageLoader/FullPageLoader';
import Layout from '@/components/Layout/Layout';
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { MockTools } from 'storage/tools';
import { useForm } from 'react-hook-form';
import { ITool } from 'interfaces/tool';
import {
  MdOutlineDescription,
  MdOutlineEdit,
  MdSaveAlt,
  MdTitle,
} from 'react-icons/md';
import { HiOutlineLink } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';
import { FaToolbox, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { TbLicense } from 'react-icons/tb';
import { BiGitBranch } from 'react-icons/bi';
import { RiBug2Line } from 'react-icons/ri';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Tool = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = useForm();

  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [isDiscarding, setIsDiscarding] = React.useState(false);

  const {
    query: { redirect, tool: toolName },
  } = router;
  const tool: ITool | undefined = MockTools.find((tool) => tool.name === toolName);

  tool &&
    Object.keys(tool)
      // write logic to get all props from interface
      .filter((prop) => !['authors'].includes(prop))
      .map(
        (prop) => setValue(prop, tool[prop as keyof ITool]),

        // @ts-ignore
        setValue('authors', tool['authors' as keyof ITool]?.join(', '))
      );

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const editSubmitHandler = () =>
    //   {
    //   name,
    //   title,
    //   shortDescription,
    //   longDescription,
    //   url,
    //   authors,
    //   tool_type,
    //   license,
    //   source_repository,
    //   bug_tracker_url,
    //   user_docs_url,
    // }: ITool
    {
      // const details = {
      //   name,
      //   title,
      //   shortDescription,
      //   longDescription,
      //   url,
      //   authors,
      //   tool_type,
      //   license,
      //   source_repository,
      //   bug_tracker_url,
      //   user_docs_url,
      // };

      // console.log(details);

      Swal.fire({
        icon: 'warning',
        title: 'Save Changes?',
        text: 'This cannot be undone!',
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        // denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Changes Saved Successfully!', '', 'success').then(() =>
            router.push(redirect?.toString() || `/tools/preview/${tool?.name}`)
          );
        }
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info');
        // }
      });
    };

  const discardEditHandler = () => {
    setIsDiscarding(true);
    Swal.fire({
      icon: 'question',
      title: 'Discard changes?',
      text: 'All changes will be lost!',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Discard',
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Changes Discarded!', '', 'success').then(() =>
          router.push(redirect?.toString() || `/tools/preview/${tool?.name}`)
        );
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info');
      // }
    });
    setIsDiscarding(false);
  };

  if (!isMounted) {
    return <FullPageLoader />;
  }
  return (
    isMounted &&
    tool && (
      <Layout
        pageTitle={tool && `Edit ${tool.title}`}
        pageLink={tool && `/tools/edit/${tool.name}`}
        description={tool && `${tool.shortDescription}`}
      >
        <Center py={6}>
          {!tool ? (
            <Heading as="h1" textStyle="h1">
              Tool not found
            </Heading>
          ) : (
            <Center
              as={Flex}
              direction="column"
              // border="thin solid green"
              w={{ base: '100%', md: '70%' }}
              p={6}
            >
              <Box mb={6}>
                <Heading as="h1" textStyle="h1">
                  Edit{' '}
                  <Text as="span" textStyle="h1" color="blue.600">
                    {tool.title}
                  </Text>
                </Heading>
              </Box>

              <Box w="100%" p={3}>
                <form onSubmit={handleSubmit(editSubmitHandler)}>
                  <Stack spacing={4}>
                    <Box>
                      <FormControl
                      // isInvalid={errors.name}
                      >
                        <FormLabel htmlFor="name">Tool ID</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<Text>ID</Text>}
                          />
                          <Input
                            id="name"
                            placeholder="Name"
                            {...register('name', {})}
                            disabled={
                              getValues()['name'] != undefined ? true : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.name && errors.name.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.title}
                      >
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEdit />}
                          />
                          <Input
                            id="title"
                            placeholder="Title"
                            {...register('title', {})}
                            disabled={
                              getValues()['title'] != undefined ? true : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.title && errors.title.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box w="100%">
                      <FormControl
                      // isInvalid={errors.shortDescription}
                      >
                        <FormLabel htmlFor="shortDescription">
                          Short Description
                        </FormLabel>

                        <Textarea
                          id="shortDescription"
                          placeholder="Your Short Description goes here ..."
                          {...register('shortDescription', {})}
                          disabled={
                            getValues()['shortDescription'] != undefined
                              ? true
                              : false
                          }
                        />
                        {/* <FormErrorMessage>
                          {errors.shortDescription && errors.shortDescription.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box w="100%">
                      <FormControl
                      // isInvalid={errors.longDescription}
                      >
                        <FormLabel htmlFor="longDescription">
                          Long Description
                        </FormLabel>

                        <Textarea
                          id="longDescription"
                          placeholder="Your Long Description goes here ..."
                          {...register('longDescription', {})}
                          disabled={
                            getValues()['longDescription'] != undefined
                              ? true
                              : false
                          }
                        />
                        {/* <FormErrorMessage>
                          {errors.longDescription && errors.longDescription.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.url}
                      >
                        <FormLabel htmlFor="url">URL</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<HiOutlineLink />}
                          />
                          <Input
                            id="url"
                            placeholder="link-to-tool"
                            {...register('url', {})}
                            disabled={
                              getValues()['url'] != undefined ? true : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.url && errors.url.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.authors}
                      >
                        <FormLabel htmlFor="authors">Authors</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<FiUsers />}
                          />
                          <Input
                            id="authors"
                            placeholder="Mofor Emmanuel"
                            {...register('authors', {})}
                            disabled={
                              getValues()['authors'] != undefined ? true : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.authors && errors.authors.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.toolType}
                      >
                        <FormLabel htmlFor="toolType">Tool Type</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<FaToolbox />}
                          />
                          <Input
                            id="toolType"
                            placeholder="eg: Web App"
                            {...register('toolType', {})}
                            disabled={
                              getValues()['toolType'] != undefined
                                ? true
                                : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.toolType && errors.toolType.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.license}
                      >
                        <FormLabel htmlFor="license">License</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<TbLicense />}
                          />
                          <Input
                            id="license"
                            placeholder="eg: MIT"
                            {...register('license', {})}
                            disabled={
                              getValues()['license'] != undefined ? true : false
                            }
                          />
                        </InputGroup>
                        {/* <FormErrorMessage>
                          {errors.license && errors.license.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.sourceRepository}
                      >
                        <FormLabel htmlFor="sourceRepository">
                          Source Repository
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiGitBranch />}
                          />
                          <Input
                            id="sourceRepository"
                            placeholder={`eg: https://github.com/tools/${
                              getValues().sourceRepository || ''
                            }`}
                            {...register('sourceRepository', {})}
                            disabled={
                              getValues()['sourceRepository'] != undefined
                                ? true
                                : false
                            }
                          />
                        </InputGroup>

                        {/* <FormErrorMessage>
                          {errors.sourceRepository && errors.sourceRepository.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.bugTrackerUrl}
                      >
                        <FormLabel htmlFor="bugTrackerUrl">
                          Bug Tacker Url
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<RiBug2Line />}
                          />
                          <Input
                            id="bugTrackerUrl"
                            placeholder={`eg: https://github.com/issues/${
                              getValues().name || ''
                            }`}
                            {...register('bugTrackerUrl', {})}
                            disabled={
                              getValues()['bugTrackerUrl'] != undefined
                                ? true
                                : false
                            }
                          />
                        </InputGroup>

                        {/* <FormErrorMessage>
                          {errors.bugTrackerUrl && errors.bugTrackerUrl.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl
                      // isInvalid={errors.userDocsUrl}
                      >
                        <FormLabel htmlFor="userDocsUrl">
                          User Docs Url
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<IoDocumentTextOutline />}
                          />
                          <Input
                            id="bugTracuserDocsUrlkerUrl"
                            placeholder={`eg: https://github.com/${
                              getValues().name || ''
                            }`}
                            {...register('userDocsUrl', {})}
                            disabled={
                              getValues()['userDocsUrl'] != undefined
                                ? true
                                : false
                            }
                          />
                        </InputGroup>

                        {/* <FormErrorMessage>
                          {errors.userDocsUrl && errors.userDocsUrl.message}
                        </FormErrorMessage> */}
                      </FormControl>
                    </Box>

                    <Center>
                      <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={3}
                        mt={6}
                      >
                        <Button
                          colorScheme="red"
                          rounded="0"
                          variant="outline"
                          leftIcon={<FaTrashAlt />}
                          transition="all 0.6s"
                          _hover={{
                            color: 'white',
                            background: 'red.600',
                            transform: 'scale(1.1)',
                          }}
                          onClick={discardEditHandler}
                          loadingText="Discarding"
                          isLoading={isDiscarding}
                        >
                          Discard Changes
                        </Button>

                        <Button
                          colorScheme="green"
                          rounded="0"
                          variant="solid"
                          color="white"
                          leftIcon={<MdSaveAlt fontSize={'1.2rem'} />}
                          transition="all 0.6s"
                          _hover={{
                            color: 'green.600',
                            background: 'white',
                            transform: 'scale(1.1)',
                            borderColor: 'green.600',
                            borderWidth: 'thin',
                            borderStyle: 'solid',
                          }}
                          // onClick={() =>
                          //   router.push(`/tools/preview/${tool.name}`)
                          // }
                          type="submit"
                          loadingText="Saving"
                          isLoading={isSubmitting}
                        >
                          Save Changes
                        </Button>
                      </Stack>
                    </Center>
                  </Stack>
                </form>
              </Box>
            </Center>
          )}
        </Center>
      </Layout>
    )
  );
};

export default Tool;
