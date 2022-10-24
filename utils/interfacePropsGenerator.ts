//Code generator based on TS compiler API (ts-morph)

import {
  Project,
  VariableDeclarationKind,
  InterfaceDeclaration,
} from 'ts-morph';

// initName is name of the interface file below the root, ./src is considered the root
const generateInterfaceProps = (intName: string): string[] => {
  const project = new Project({
    useInMemoryFileSystem: true
  });
  const sourceFile = project.addSourceFileAtPath(`/interfaces/${intName}.ts`);
  const node = sourceFile.getInterface(intName)!;
  const allKeys = node.getProperties().map((p) => p.getName());

  return allKeys;
};

export default generateInterfaceProps;