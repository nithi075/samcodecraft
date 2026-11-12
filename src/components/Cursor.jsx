import TransitionLink from './TransitionLink';

export default function Cursor() {
  return (
      <div className="cursor hide-tablet">
        <p>
          {"label"}
        </p>
        <div className="cursor_icon">
          <div className="svg-icon w-embed">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.46055 12.139L10.3852 5.21434H4.52121V4.21445H12.0922V11.7855H11.0923V5.92145L4.16766 12.8461L3.46055 12.139Z" fill="#FAFAFA" />
            </svg>
          </div>
        </div>
      </div>
  );
}
