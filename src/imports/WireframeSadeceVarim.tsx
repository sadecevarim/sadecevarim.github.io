import svgPaths from "./svg-uaeedmpls7";
import clsx from "clsx";
type Container98Props = {
  additionalClassNames?: string;
};

function Container98({ children, additionalClassNames = "" }: React.PropsWithChildren<Container98Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container20Props = {
  additionalClassNames?: string;
};

function Container20({ children, additionalClassNames = "" }: React.PropsWithChildren<Container20Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
};

function Wrapper6({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex gap-[32px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Container19Props = {
  additionalClassNames?: string;
};

function Container19({ children, additionalClassNames = "" }: React.PropsWithChildren<Container19Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[12px] px-[12px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return <Wrapper5 additionalClassNames={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>{children}</Wrapper5>;
}
type Container18Props = {
  additionalClassNames?: string;
};

function Container18({ children, additionalClassNames = "" }: React.PropsWithChildren<Container18Props>) {
  return <Wrapper5 additionalClassNames={clsx("relative shrink-0 w-[200px]", additionalClassNames)}>{children}</Wrapper5>;
}
type Container17Props = {
  additionalClassNames?: string;
};

function Container17({ children, additionalClassNames = "" }: React.PropsWithChildren<Container17Props>) {
  return (
    <div className={clsx("bg-[#e5e5e5] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[1.6px] relative size-full">{children}</div>
    </div>
  );
}

function IconHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-0.26%_-0.01%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 802.631 191.373">
        {children}
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("bg-[#525252] relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("bg-[#737373] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[8.8px] px-[8.8px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TextText1Props = {
  text: string;
};

function TextText1({ text }: TextText1Props) {
  return (
    <div className="absolute bg-[#a1a1a1] h-[24px] left-0 top-[28.4px] w-[80.8px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[12px] left-[8px] not-italic text-[8px] text-black top-[-2px] tracking-[0.2px] uppercase w-[58px]">{text}</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[80.8px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.8 80.8">
        <g clipPath="url(#clip0_1_692)" id="Icon">
          <path d="M0 0L80.8 80.8" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M80.8 0L0 80.8" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_692">
            <rect fill="white" height="80.8" width="80.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[255.738px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.738 255.738">
        <g clipPath="url(#clip0_1_1388)" id="Icon">
          <path d="M0 0L255.738 255.738" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.999998" />
          <path d="M255.738 0L0 255.738" id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="0.999998" />
        </g>
        <defs>
          <clipPath id="clip0_1_1388">
            <rect fill="white" height="255.738" width="255.738" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[255.725px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.725 255.725">
        <g clipPath="url(#clip0_1_1380)" id="Icon">
          <path d="M0 0L255.725 255.725" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M255.725 0L0 255.725" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1380">
            <rect fill="white" height="255.725" width="255.725" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type Container16Props = {
  additionalClassNames?: string;
};

function Container16({ additionalClassNames = "" }: Container16Props) {
  return (
    <div className={clsx("bg-[#d4d4d4] h-[108.7px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
        <ContainerText13 text="TITLE: SHARE/JOIN/CONTACT" />
        <Container15 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <Wrapper1 additionalClassNames="bg-[#a1a1a1] h-[29.6px]">
      <ContainerText10 text="BUTTON" />
    </Wrapper1>
  );
}
type Footer1Props = {
  additionalClassNames?: string;
};

function Footer1({ additionalClassNames = "" }: Footer1Props) {
  return (
    <div className={clsx("absolute bg-[#737373] content-stretch flex flex-col gap-[8px] h-[64.8px] items-start left-[1.6px] pb-0 pt-[12.8px] px-[12px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container7 />
      <ContainerText7 text="COPYRIGHT" />
    </div>
  );
}
type ContainerText16Props = {
  text: string;
};

function ContainerText16({ text }: ContainerText16Props) {
  return (
    <div className="bg-white relative shrink-0 size-[24px]">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#0a0a0a] text-[8px] text-nowrap">{text}</p>
      </div>
    </div>
  );
}
type Container14Props = {
  additionalClassNames?: string;
};

function Container14({ additionalClassNames = "" }: Container14Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex flex-col gap-[8px] h-[156.1px] items-start pb-[0.8px] pt-[12.8px] px-[12.8px] w-[189px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <XPlaceholder9 />
      <ContainerText14 text="TITLE" />
      <ContainerText15 text="SNIPPET" />
    </div>
  );
}
type ContainerText15Props = {
  text: string;
};

function ContainerText15({ text }: ContainerText15Props) {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-0 not-italic text-[#525252] text-[7px] text-nowrap top-[-1.2px]">{text}</p>
    </div>
  );
}
type ContainerText14Props = {
  text: string;
};

function ContainerText14({ text }: ContainerText14Props) {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[8px] uppercase">{text}</p>
    </div>
  );
}
type XPlaceholder9Props = {
  additionalClassNames?: string;
};

function XPlaceholder9({ additionalClassNames = "" }: XPlaceholder9Props) {
  return (
    <div className="bg-[#a1a1a1] h-[96px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Icon8 />
      <TextText text="X-PREVIEW IMAGE" additionalClassNames="left-[39.25px] top-[42px] w-[84.9px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute h-[94.4px] left-[0.8px] top-[0.8px] w-[161.8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161.8 94.4">
        <g clipPath="url(#clip0_1_1418)" id="Icon">
          <path d="M0 0L161.8 94.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M161.8 0L0 94.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1418">
            <rect fill="white" height="94.4" width="161.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type ContainerText13Props = {
  text: string;
};

function ContainerText13({ text }: ContainerText13Props) {
  return (
    <div className="content-stretch flex h-[13.5px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[13.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[9px] text-center tracking-[0.225px] uppercase">{text}</p>
    </div>
  );
}
type ContainerText12Props = {
  text: string;
};

function ContainerText12({ text }: ContainerText12Props) {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[8px] tracking-[0.2px] uppercase">{text}</p>
    </div>
  );
}
type XPlaceholder4Props = {
  additionalClassNames?: string;
};

function XPlaceholder4({ additionalClassNames = "" }: XPlaceholder4Props) {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[48px] top-0">
      <Icon4 />
      <TextText text="IMAGE" additionalClassNames="left-[2.76px] top-[17.2px] w-[40.862px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[46.4px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4 46.4">
        <g clipPath="url(#clip0_1_1400)" id="Icon">
          <path d="M0 0L46.4 46.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M46.4 0L0 46.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1400">
            <rect fill="white" height="46.4" width="46.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
type ContainerText11Props = {
  text: string;
};

function ContainerText11({ text }: ContainerText11Props) {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[6px]">{text}</p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-0 not-italic text-[#0a0a0a] text-[7px] text-nowrap top-[-1.2px] uppercase">{text}</p>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-0 not-italic text-[#0a0a0a] text-[7px] text-nowrap top-[-1.2px] uppercase">{text}</p>
    </div>
  );
}
type ContainerText10Props = {
  text: string;
};

function ContainerText10({ text }: ContainerText10Props) {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[8px] text-center tracking-[0.2px] uppercase">{text}</p>
    </div>
  );
}

function Header1() {
  return (
    <Wrapper2 additionalClassNames="h-[38.4px]">
      <div className="content-stretch flex items-center justify-between pb-[0.8px] pt-0 px-[8px] relative size-full">
        <ContainerText8 text="LOGO" />
        <ContainerText9 text="MENU" />
      </div>
    </Wrapper2>
  );
}
type ContainerText9Props = {
  text: string;
};

function ContainerText9({ text }: ContainerText9Props) {
  return (
    <Wrapper3 additionalClassNames="h-[20.1px] w-[38.175px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-[8.8px] not-italic text-[7px] text-nowrap text-white top-[3.6px] tracking-[0.175px] uppercase">{text}</p>
    </Wrapper3>
  );
}
type ContainerText8Props = {
  text: string;
};

function ContainerText8({ text }: ContainerText8Props) {
  return (
    <Wrapper3 additionalClassNames="h-[21.6px] w-[47.45px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[12px] left-[12.8px] not-italic text-[8px] text-nowrap text-white top-[2.8px] tracking-[0.2px] uppercase">{text}</p>
    </Wrapper3>
  );
}

function Footer() {
  return (
    <div className="bg-[#737373] h-[64.8px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[12.8px] px-[12px] relative size-full">
        <Container7 />
        <ContainerText7 text="COPYRIGHT" />
      </div>
    </div>
  );
}
type ContainerText7Props = {
  text: string;
};

function ContainerText7({ text }: ContainerText7Props) {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[8px] text-center text-white tracking-[0.2px] uppercase">{text}</p>
    </div>
  );
}

function Container7() {
  return (
    <Wrapper>
      <ContainerText4 text="IG" />
      <ContainerText4 text="YT" />
      <ContainerText4 text="TT" />
    </Wrapper>
  );
}
type Container3Props = {
  additionalClassNames?: string;
};

function Container3({ additionalClassNames = "" }: Container3Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex flex-col gap-[12px] h-[187.1px] items-start pb-[0.8px] pt-[16.8px] px-[16.8px] top-0 w-[257.325px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <XPlaceholder1 />
      <ContainerText5 text="TITLE" />
      <ContainerText6 text="SNIPPET" />
    </div>
  );
}
type ContainerText6Props = {
  text: string;
};

function ContainerText6({ text }: ContainerText6Props) {
  return (
    <div className="content-stretch flex h-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[12px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[8px]">{text}</p>
    </div>
  );
}
type ContainerText5Props = {
  text: string;
};

function ContainerText5({ text }: ContainerText5Props) {
  return (
    <div className="content-stretch flex h-[13.5px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[13.5px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[9px] uppercase">{text}</p>
    </div>
  );
}
type XPlaceholder1Props = {
  additionalClassNames?: string;
};

function XPlaceholder1({ additionalClassNames = "" }: XPlaceholder1Props) {
  return (
    <div className="bg-[#a1a1a1] h-[112px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Icon1 />
      <TextText text="X-PREVIEW IMAGE" additionalClassNames="left-[69.41px] top-[50px] w-[84.9px]" />
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute bg-[#a1a1a1] content-stretch flex h-[12px] items-start px-[8px] py-0", additionalClassNames)}>
      <p className="font-['Arial:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[8px] text-black text-nowrap tracking-[0.2px] uppercase">{text}</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[110.4px] left-[0.8px] top-[0.8px] w-[222.125px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.125 110.4">
        <g clipPath="url(#clip0_1_1414)" id="Icon">
          <path d="M0 0L222.125 110.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M222.125 0L0 110.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1414">
            <rect fill="white" height="110.4" width="222.125" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <Wrapper2 additionalClassNames="h-[55.9px]">
      <div className="content-stretch flex gap-[12px] items-center pb-[0.8px] pt-0 px-[12px] relative size-full">
        <ContainerText2 text="LOGO" />
        <ContainerText3 text="MENU" />
        <Container />
      </div>
    </Wrapper2>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ContainerText4 text="IG" />
        <ContainerText4 text="YT" />
        <Text text="TT" />
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.8px] relative size-full">
      <p className="font-['Arial:Regular',sans-serif] leading-[10.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[7px] text-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 bg-white grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Text3 text={text} />
    </div>
  );
}
type ContainerText4Props = {
  text: string;
};

function ContainerText4({ text }: ContainerText4Props) {
  return (
    <div className="bg-white relative shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Text3 text={text} />
    </div>
  );
}
type ContainerText3Props = {
  text: string;
};

function ContainerText3({ text }: ContainerText3Props) {
  return (
    <div className="basis-0 bg-white grow h-[31.1px] min-h-px min-w-px relative shrink-0">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[13.5px] left-[326.69px] not-italic text-[#0a0a0a] text-[9px] text-center text-nowrap top-[6.8px] tracking-[0.225px] translate-x-[-50%] uppercase">{text}</p>
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <Wrapper3 additionalClassNames="h-[31.1px] w-[74.175px]">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[13.5px] left-[24.8px] not-italic text-[9px] text-nowrap text-white top-[6.8px] tracking-[0.225px] uppercase">{text}</p>
    </Wrapper3>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex h-[13.5px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[13.5px] min-h-px min-w-px not-italic relative shrink-0 text-[9px] text-black tracking-[0.225px] uppercase">{text}</p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText({ text, additionalClassNames = "" }: ContainerTextProps) {
  return (
    <div className={clsx("h-[15px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-black text-nowrap top-[-1.2px] tracking-[0.5px] uppercase">{text}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[190.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconHelper>
        <path d={svgPaths.p16bc5f20} id="Vector" stroke="var(--stroke-0, black)" />
      </IconHelper>
      <IconHelper>
        <path d={svgPaths.p36a8a100} id="Vector" stroke="var(--stroke-0, black)" />
      </IconHelper>
    </div>
  );
}

function XPlaceholder() {
  return (
    <div className="bg-[#a1a1a1] h-[192px] relative shrink-0 w-full" data-name="XPlaceholder">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[0.8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[386.04px] not-italic text-[#0a0a0a] text-[11px] text-center text-nowrap top-[-1.2px] tracking-[0.55px] translate-x-[-50%] uppercase">TITLE: SADECE VARIM</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[50.1px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[16.8px] px-[16.8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[110.4px] left-[0.8px] top-[0.8px] w-[222.137px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 222.137 110.4">
        <g clipPath="url(#clip0_1_1396)" id="Icon">
          <path d="M0 0L222.137 110.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M222.137 0L0 110.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1396">
            <rect fill="white" height="110.4" width="222.137" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XPlaceholder2() {
  return (
    <div className="bg-[#a1a1a1] h-[112px] relative shrink-0 w-full" data-name="XPlaceholder">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Icon2 />
      <TextText text="X-PREVIEW IMAGE" additionalClassNames="left-[69.41px] top-[50px] w-[84.9px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] h-[187.1px] items-start left-[273.33px] pb-[0.8px] pt-[16.8px] px-[16.8px] top-0 w-[257.337px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <XPlaceholder2 />
      <ContainerText5 text="TITLE" />
      <ContainerText6 text="SNIPPET" />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[187.1px] relative shrink-0 w-full" data-name="Container">
      <Container3 additionalClassNames="left-0" />
      <Container4 />
      <Container3 additionalClassNames="left-[546.66px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[549.2px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <XPlaceholder />
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <Container17 additionalClassNames="h-[673.1px]">
      <Header />
      <Container6 />
      <Footer />
    </Container17>
  );
}

function Container9() {
  return (
    <Wrapper4 additionalClassNames="h-[690.6px]">
      <ContainerText1 text="Desktop (1440px)" />
      <Container8 />
    </Wrapper4>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[94.4px] left-[0.8px] top-[0.8px] w-[171.2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.2 94.4">
        <g clipPath="url(#clip0_1_1410)" id="Icon">
          <path d="M0 0L171.2 94.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M171.2 0L0 94.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1410">
            <rect fill="white" height="94.4" width="171.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XPlaceholder3() {
  return (
    <div className="bg-[#a1a1a1] h-[96px] relative shrink-0 w-full" data-name="XPlaceholder">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Icon3 />
      <TextText text="X-HERO IMAGE" additionalClassNames="left-[49.98px] top-[42px] w-[72.838px]" />
    </div>
  );
}

function Container10() {
  return (
    <Wrapper1 additionalClassNames="bg-white h-[29.6px]">
      <ContainerText10 text="TITLE: SADECE VARIM" />
    </Wrapper1>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <XPlaceholder4 />
    </div>
  );
}

function Container13() {
  return (
    <Wrapper1 additionalClassNames="bg-white h-[65.6px]">
      <Container12 />
    </Wrapper1>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[212.8px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container13 key={i} />
      ))}
    </div>
  );
}

function Container22() {
  return (
    <Container19 additionalClassNames="h-[398.4px]">
      <XPlaceholder3 />
      <Container10 />
      <Container21 />
    </Container19>
  );
}

function Container23() {
  return (
    <Container17 additionalClassNames="h-[504.8px]">
      <Header1 />
      <Container22 />
      <Footer />
    </Container17>
  );
}

function Container24() {
  return (
    <Container18 additionalClassNames="h-[690.6px]">
      <ContainerText1 text="Mobile (375px)" />
      <Container23 />
    </Container18>
  );
}

function Homepage() {
  return (
    <Wrapper6 additionalClassNames="[grid-area:2_/_1] h-[690.6px] justify-self-stretch">
      <Container9 />
      <Container24 />
    </Wrapper6>
  );
}

function Container25() {
  return (
    <div className="gap-[8px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] relative shrink-0 w-[1087.2px]" data-name="Container">
      <ContainerText text="SECTION 1: HOMEPAGE" additionalClassNames="[grid-area:1_/_1] justify-self-stretch" />
      <Homepage />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[16.5px] left-[384.8px] not-italic text-[#0a0a0a] text-[11px] text-center text-nowrap top-[-1.2px] tracking-[0.55px] translate-x-[-50%] uppercase">ARTICLE TITLE</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[50.1px] items-start left-[24px] pb-[0.8px] pt-[16.8px] px-[16.8px] top-[24px] w-[804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[45.6px] items-start left-[24px] pb-[0.8px] pt-[16.8px] px-[16.8px] top-[282.1px] w-[804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText12 text="BODY TEXT BLOCK 1" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[45.6px] items-start left-[24px] pb-[0.8px] pt-[16.8px] px-[16.8px] top-[343.7px] w-[804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText12 text="BODY TEXT BLOCK 2" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#d4d4d4] content-stretch flex flex-col h-[63.1px] items-start left-[24px] pb-[0.8px] pt-[24.8px] px-[24.8px] top-[405.3px] w-[804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText13 text="QUOTE BLOCK" />
    </div>
  );
}

function Container31() {
  return (
    <Container20 additionalClassNames="h-[13.5px] w-[67.463px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[9px] text-nowrap tracking-[0.225px] uppercase">VIDEO EMBED X</p>
    </Container20>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white content-stretch flex h-[79.1px] items-center justify-center left-[24px] pl-[0.8px] pr-[0.812px] py-[0.8px] top-[484.4px] w-[804px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-start left-[96px] top-[42px] w-[74.625px]" data-name="Container">
      <p className="font-['Arial:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#0a0a0a] text-[8px] text-nowrap tracking-[0.2px] uppercase">AUTHOR NAME/BIO</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[62.4px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.4 62.4">
        <g clipPath="url(#clip0_1_1406)" id="Icon">
          <path d="M0 0L62.4 62.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M62.4 0L0 62.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1406">
            <rect fill="white" height="62.4" width="62.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#a1a1a1] h-[24px] left-0 top-[19.2px] w-[62.4px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[12px] left-[8px] not-italic text-[8px] text-black top-[-2px] tracking-[0.2px] uppercase w-[41px]">X-AUTHOR PHOTO</p>
    </div>
  );
}

function XPlaceholder5() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[16px] size-[64px] top-[16px]" data-name="XPlaceholder">
      <Icon5 />
      <Text1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-white border-[0.8px] border-black border-solid h-[97.6px] left-[24px] top-[579.5px] w-[804px]" data-name="Container">
      <Container33 />
      <XPlaceholder5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute h-[158.4px] left-0 top-0 w-[802.4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 802.4 158.4">
        <g clipPath="url(#clip0_1_1392)" id="Icon">
          <path d="M0 0L802.4 158.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M802.4 0L0 158.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1392">
            <rect fill="white" height="158.4" width="802.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XPlaceholder6() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid h-[160px] left-[24px] top-[98.1px] w-[804px]" data-name="XPlaceholder">
      <Icon6 />
      <TextText text="X-TOP IMAGE" additionalClassNames="left-[367.95px] top-[73.2px] w-[66.5px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[701.1px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container32 />
      <Container34 />
      <XPlaceholder6 />
    </div>
  );
}

function Container36() {
  return (
    <Container17 additionalClassNames="h-[825px]">
      <Header />
      <Container35 />
      <Footer />
    </Container17>
  );
}

function Container37() {
  return (
    <Wrapper4 additionalClassNames="h-[842.5px]">
      <ContainerText1 text="Desktop (1440px)" />
      <Container36 />
    </Wrapper4>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#525252] text-[6px] text-center">BODY TEXT BLOCK 1</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[42.6px] items-start left-[12px] pb-[0.8px] pt-[8.8px] px-[8.8px] top-[104px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText10 text="ARTICLE TITLE" />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[26.6px] items-start left-[12px] pb-[0.8px] pt-[8.8px] px-[8.8px] top-[158.6px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText11 text="BODY TEXT BLOCK 2" />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-[73.64px] not-italic text-[#0a0a0a] text-[7px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] uppercase">QUOTE BLOCK</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-[#d4d4d4] content-stretch flex flex-col h-[36.1px] items-start left-[12px] pb-[0.8px] pt-[12.8px] px-[12.8px] top-[193.2px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-[50.2px]" data-name="Container">
      <Text5 text="VIDEO EMBED X" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white content-stretch flex h-[44.1px] items-center justify-center left-[12px] p-[0.8px] top-[237.3px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-start left-[8px] top-[60px] w-[155.2px]" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[6px] text-center uppercase">AUTHOR NAME/BIO</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#a1a1a1] h-[24px] left-[7.5px] top-[11.5px] w-[30px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[12px] left-[8px] not-italic text-[8px] text-black top-[-2px] tracking-[0.2px] uppercase w-[33px]">X-AUTHOR</p>
    </div>
  );
}

function XPlaceholder7() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[61.6px] size-[48px] top-[8px]" data-name="XPlaceholder">
      <Icon4 />
      <Text2 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-white border-[0.8px] border-black border-solid h-[78.6px] left-[12px] top-[289.4px] w-[172.8px]" data-name="Container">
      <Container45 />
      <XPlaceholder7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute h-[78.4px] left-0 top-0 w-[171.2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 171.2 78.4">
        <g clipPath="url(#clip0_1_1422)" id="Icon">
          <path d="M0 0L171.2 78.4" id="Vector" stroke="var(--stroke-0, black)" />
          <path d="M171.2 0L0 78.4" id="Vector_2" stroke="var(--stroke-0, black)" />
        </g>
        <defs>
          <clipPath id="clip0_1_1422">
            <rect fill="white" height="78.4" width="171.2" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function XPlaceholder8() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid h-[80px] left-[12px] top-[12px] w-[172.8px]" data-name="XPlaceholder">
      <Icon7 />
      <TextText text="X-TOP IMAGE" additionalClassNames="left-[52.35px] top-[33.2px] w-[66.5px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[392px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
      <Container42 />
      <Container44 />
      <Container46 />
      <XPlaceholder8 />
    </div>
  );
}

function Container48() {
  return (
    <Container17 additionalClassNames="h-[498.4px]">
      <Header1 />
      <Container47 />
      <Footer />
    </Container17>
  );
}

function Container49() {
  return (
    <Container18 additionalClassNames="h-[842.5px]">
      <ContainerText1 text="Mobile (375px)" />
      <Container48 />
    </Container18>
  );
}

function ArticlePage() {
  return (
    <Wrapper6 additionalClassNames="h-[842.5px] w-full">
      <Container37 />
      <Container49 />
    </Wrapper6>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[865.5px] items-start relative shrink-0 w-[1087.2px]" data-name="Container">
      <ContainerText text="SECTION 2: ARTICLE / STORY PAGE" additionalClassNames="w-full" />
      <ArticlePage />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute bg-[#737373] content-stretch flex gap-[12px] h-[55.9px] items-center left-[1.6px] pb-[0.8px] pt-0 px-[12px] top-[1.6px] w-[852px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText2 text="LOGO" />
      <ContainerText3 text="MENU" />
      <Container />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute h-[7px] left-[2.9px] top-[15.7px] w-[117px]" data-name="Dropdown">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[13.5px] left-[5.9px] not-italic text-[9px] text-black text-nowrap top-[-3.3px] tracking-[0.225px] uppercase">CATEGORY DROPDOWN</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid h-[41.6px] left-[23.9px] top-[23.99px] w-[155.2px]" data-name="Container">
      <Dropdown />
      <div className="absolute flex h-px items-center justify-center left-[136.9px] top-[21.7px] w-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-px">
            <div className="absolute inset-[-7.36px_-100%_-7.36px_-636.4%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.36396 14.7279">
                <path d={svgPaths.p2e8c7600} fill="var(--stroke-0, black)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[500.3px] left-[24px] top-[89.6px] w-[804px]" data-name="Container">
      <Container14 additionalClassNames="left-0 top-0" />
      <Container14 additionalClassNames="left-[205px] top-0" />
      <Container14 additionalClassNames="left-[410px] top-0" />
      <Container14 additionalClassNames="left-[615px] top-0" />
      <Container14 additionalClassNames="left-0 top-[172.1px]" />
      <Container14 additionalClassNames="left-[205px] top-[172.1px]" />
      <Container14 additionalClassNames="left-[410px] top-[172.1px]" />
      <Container14 additionalClassNames="left-[615px] top-[172.1px]" />
      <Container14 additionalClassNames="left-0 top-[344.2px]" />
    </div>
  );
}

function Container53() {
  return (
    <Container20 additionalClassNames="h-[24px] w-[49.4px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#0a0a0a] text-[8px] text-nowrap tracking-[0.2px] uppercase">PAGINATION:</p>
    </Container20>
  );
}

function Container54() {
  return (
    <Container98 additionalClassNames="h-[24px] w-[136px]">
      <ContainerText16 text="1" />
      <ContainerText16 text="2" />
      <ContainerText16 text="3" />
      <ContainerText16 text="4" />
      <ContainerText16 text="5" />
    </Container98>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-start justify-center left-[24px] top-[613.9px] w-[804px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[677.9px] left-[1.6px] top-[57.5px] w-[852px]" data-name="Container">
      <Container51 />
      <Container52 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#e5e5e5] h-[801.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Header2 />
      <Container56 />
      <Footer1 additionalClassNames="top-[735.4px] w-[852px]" />
    </div>
  );
}

function Container58() {
  return (
    <Wrapper4 additionalClassNames="h-[819.3px]">
      <ContainerText1 text="Desktop (1440px)" />
      <Container57 />
    </Wrapper4>
  );
}

function Header3() {
  return (
    <div className="absolute bg-[#737373] content-stretch flex h-[38.4px] items-center justify-between left-[1.6px] pb-[0.8px] pt-0 px-[8px] top-[1.6px] w-[196.8px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none" />
      <ContainerText8 text="LOGO" />
      <ContainerText9 text="MENU" />
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-941.6px] size-0 top-[-1814.8px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="h-[10.4px] relative shrink-0 w-full" data-name="Dropdown">
      <Option />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-white h-[33.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[15.2px] px-[8.8px] relative size-full">
        <Dropdown1 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <XPlaceholder4 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-0 w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <XPlaceholder4 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-[73.6px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <XPlaceholder4 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-[147.2px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <XPlaceholder4 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-[220.8px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container70 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <XPlaceholder4 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-[294.4px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[56px] top-0 w-[99.2px]" data-name="Container">
      <Text4 text="TITLE" />
      <ContainerText11 text="BODY TEXT" />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <XPlaceholder4 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[8.8px] px-[8.8px] top-[368px] w-[172.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[433.6px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container65 />
      <Container68 />
      <Container71 />
      <Container74 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.3px]" data-name="Container">
      <Text5 text="PAGINATION:" />
    </div>
  );
}

function Container80() {
  return (
    <Container98 additionalClassNames="h-[20px] w-[68px]">
      <ContainerText4 text="1" />
      <ContainerText4 text="2" />
      <ContainerText4 text="3" />
    </Container98>
  );
}

function Container81() {
  return (
    <Wrapper>
      <Container79 />
      <Container80 />
    </Wrapper>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[547.2px] items-start left-[1.6px] pb-0 pt-[12px] px-[12px] top-[40px] w-[196.8px]" data-name="Container">
      <Container59 />
      <Container78 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#e5e5e5] h-[653.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <Header3 />
      <Container82 />
      <Footer1 additionalClassNames="top-[587.2px] w-[196.8px]" />
    </div>
  );
}

function Container84() {
  return (
    <Container18 additionalClassNames="h-[819.3px]">
      <ContainerText1 text="Mobile (375px)" />
      <Container83 />
    </Container18>
  );
}

function CategoryPage() {
  return (
    <Wrapper6 additionalClassNames="h-[819.3px] w-full">
      <Container58 />
      <Container84 />
    </Wrapper6>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[842.3px] items-start relative shrink-0 w-[1087.2px]" data-name="Container">
      <ContainerText text="SECTION 3: CATEGORY / ARCHIVE PAGE" additionalClassNames="w-full" />
      <CategoryPage />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[19.5px] left-[368.23px] not-italic text-[#0a0a0a] text-[13px] text-center text-nowrap top-[-1.2px] tracking-[0.65px] translate-x-[-50%] uppercase">SLOGAN HEADER: SADECE VARIM</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-white h-[86.7px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.6px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[1.6px] pt-[33.6px] px-[33.6px] relative size-full">
        <Container86 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[108.7px] relative shrink-0 w-full" data-name="Container">
      <Container16 additionalClassNames="[grid-area:1_/_1]" />
      <Container16 additionalClassNames="[grid-area:1_/_2]" />
      <Container16 additionalClassNames="[grid-area:1_/_3]" />
    </div>
  );
}

function XPlaceholder10() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[257.325px] top-0" data-name="XPlaceholder">
      <Icon9 />
      <TextText text="X-SOCIAL POST 1" additionalClassNames="left-[87.42px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function XPlaceholder11() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[273.33px] size-[257.337px] top-0" data-name="XPlaceholder">
      <Icon10 />
      <TextText text="X-SOCIAL POST 2" additionalClassNames="left-[87.44px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function XPlaceholder12() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[546.66px] size-[257.325px] top-0" data-name="XPlaceholder">
      <Icon9 />
      <TextText text="X-SOCIAL POST 3" additionalClassNames="left-[87.42px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function XPlaceholder13() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[257.325px] top-[273.34px]" data-name="XPlaceholder">
      <Icon9 />
      <TextText text="X-SOCIAL POST 4" additionalClassNames="left-[87.42px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function XPlaceholder14() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[273.33px] size-[257.337px] top-[273.34px]" data-name="XPlaceholder">
      <Icon10 />
      <TextText text="X-SOCIAL POST 5" additionalClassNames="left-[87.44px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function XPlaceholder15() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[546.66px] size-[257.325px] top-[273.34px]" data-name="XPlaceholder">
      <Icon9 />
      <TextText text="X-SOCIAL POST 6" additionalClassNames="left-[87.42px] top-[121.86px] w-[80.863px]" />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[530.675px] relative shrink-0 w-full" data-name="Container">
      <XPlaceholder10 />
      <XPlaceholder11 />
      <XPlaceholder12 />
      <XPlaceholder13 />
      <XPlaceholder14 />
      <XPlaceholder15 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[862.075px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <Container87 />
        <Container88 />
        <Container89 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <Container17 additionalClassNames="h-[985.975px]">
      <Header />
      <Container90 />
      <Footer />
    </Container17>
  );
}

function Container92() {
  return (
    <Wrapper4 additionalClassNames="h-[1003.475px]">
      <ContainerText1 text="Desktop (1440px)" />
      <Container91 />
    </Wrapper4>
  );
}

function Container93() {
  return (
    <div className="bg-white h-[37.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[12.8px] px-[12.8px] relative size-full">
        <ContainerText10 text="SLOGAN HEADER: SADECE VARIM" />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[10.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[10.5px] left-[73.61px] not-italic text-[#0a0a0a] text-[7px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] uppercase">TITLE: SHARE/JOIN/CONTACT</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex h-[9px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[9px] min-h-px min-w-px not-italic relative shrink-0 text-[#0a0a0a] text-[6px] text-center uppercase">BUTTON</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#a1a1a1] h-[18.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[4.8px] px-[4.8px] relative size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#d4d4d4] h-[62.7px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[0.8px] pt-[12.8px] px-[12.8px] relative size-full">
        <Container94 />
        <Container96 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[204.1px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container97 key={i} />
      ))}
    </div>
  );
}

function XPlaceholder16() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[82.4px] top-0" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 1" />
    </div>
  );
}

function XPlaceholder17() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[90.4px] size-[82.4px] top-0" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 2" />
    </div>
  );
}

function XPlaceholder18() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[82.4px] top-[90.4px]" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 3" />
    </div>
  );
}

function XPlaceholder19() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[90.4px] size-[82.4px] top-[90.4px]" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 4" />
    </div>
  );
}

function XPlaceholder20() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-0 size-[82.4px] top-[180.8px]" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 5" />
    </div>
  );
}

function XPlaceholder21() {
  return (
    <div className="absolute bg-[#a1a1a1] border-[0.8px] border-black border-solid left-[90.4px] size-[82.4px] top-[180.8px]" data-name="XPlaceholder">
      <Icon11 />
      <TextText1 text="X-SOCIAL POST 6" />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[263.2px] relative shrink-0 w-full" data-name="Container">
      <XPlaceholder16 />
      <XPlaceholder17 />
      <XPlaceholder18 />
      <XPlaceholder19 />
      <XPlaceholder20 />
      <XPlaceholder21 />
    </div>
  );
}

function Container101() {
  return (
    <Container19 additionalClassNames="h-[564.9px]">
      <Container93 />
      <Container99 />
      <Container100 />
    </Container19>
  );
}

function Container102() {
  return (
    <Container17 additionalClassNames="h-[671.3px]">
      <Header1 />
      <Container101 />
      <Footer />
    </Container17>
  );
}

function Container103() {
  return (
    <Container18 additionalClassNames="h-[1003.475px]">
      <ContainerText1 text="Mobile (375px)" />
      <Container102 />
    </Container18>
  );
}

function CampaignPage() {
  return (
    <Wrapper6 additionalClassNames="h-[1003.475px] w-full">
      <Container92 />
      <Container103 />
    </Wrapper6>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[1026.475px] items-start relative shrink-0 w-[1087.2px]" data-name="Container">
      <ContainerText text="SECTION 4: CAMPAIGN / CALL-TO-ACTION PAGE" additionalClassNames="w-full" />
      <CampaignPage />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#d4d4d4] content-start flex flex-wrap gap-[402px_314px] items-start px-[48px] py-[61px] relative shrink-0 w-[2584.4px]" data-name="App">
      <Container25 />
      <Container50 />
      <Container85 />
      <Container104 />
    </div>
  );
}

export default function WireframeSadeceVarim() {
  return (
    <div className="bg-[#d4d4d4] content-stretch flex flex-col items-center justify-center pb-0 pt-[32px] px-[32px] relative size-full" data-name="Wireframe - SADECE VARIM">
      <App />
    </div>
  );
}