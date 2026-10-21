# Erfan Bashar — portfolio template

React / Next.js static export / TypeScript / Tailwind CSS. Original design; no third-party portfolio source was copied. The supplied developer-portfolios repository is an inspiration directory, not a reusable-template license.

## Run

Use Node 22 or newer. Run `npm ci`, then `npm run dev`. Open http://localhost:3000.

- Blue: http://localhost:3000/?palette=blue
- Teal: http://localhost:3000/?palette=teal
- Use the palette selector and light/dark button in the header on any page.
- `npm run build` writes deployable static files to `out/`.
- `npm run typecheck` checks TypeScript after the initial build.

## Content

Edit `src/content/site.ts` for identity, contact links, project summaries and filters. Edit `src/app/page.tsx` for homepage narrative and services. The project detail template is in `src/app/projects/[slug]/page.tsx`. Projects are clearly marked placeholders; replace with verified facts before public launch. LinkedIn and email were extracted from the supplied résumés. No public GitHub link, photo or résumé download is included.

The two light palettes have dark text and restrained accent colors. Dark mode, native form validation, reduced-motion preference, keyboard focus, and responsive styles are included. Scroll reveal is progressive enhancement; content remains visible on browsers without animation-timeline support.

## Contact form

In preview mode the form sends nothing and displays an explicit message. To enable sending, implement API Gateway + Lambda + SES, validate input server-side, enforce body-size limits and throttling, verify spam challenges server-side, and set `site.contactEndpoint`. Browser validation is not security. Use a verified sender and a fixed recipient; visitor email is Reply-To only. Do not log message bodies. Configure CORS for your domain, but do not treat it as authentication. Add a short privacy notice before collecting messages. The API and AWS resources have NOT been provisioned by this template.

## AWS setup

1. Create a private S3 bucket with Block Public Access enabled and versioning for recovery.
2. Create a CloudFront distribution with the S3 REST origin and Origin Access Control. Grant only this distribution read access in the bucket policy. Set index.html as the default root object.
3. Associate `aws/rewrite.js` as a viewer-request CloudFront Function so nested static-export URLs work on direct navigation and refresh.
4. Use HTTPS redirect and security response headers. Plan a CSP compatible with Next's generated inline scripts (hashes or a considered policy); do not enable an untested blanket policy that breaks hydration. Add anti-framing and MIME-sniffing protection.
5. For a custom domain, request the CloudFront ACM certificate in us-east-1 and validate DNS. S3 may be in ca-central-1. Do not hardcode a guessed domain into canonical metadata. Add canonical URLs, sitemap and robots.txt once the actual domain and real content are known.
6. Define finalized resources in CDK after selecting a CloudFront billing plan and domain. This source package does not include a provisioned or verified CDK stack.
7. Configure GitHub OIDC with audience sts.amazonaws.com and subject `repo:YOUR_OWNER/YOUR_REPO:ref:refs/heads/main`. Restrict the deployment role to the target bucket (ListBucket, PutObject as needed) and distribution invalidation. No AWS credentials belong in the browser, Git, or this package.
8. Add repository variables AWS_DEPLOY_ROLE_ARN, AWS_REGION, SITE_BUCKET, CLOUDFRONT_DISTRIBUTION_ID.
9. Push source at repository root. CI builds on pushes/PRs, but production runs ONLY when an authorized operator chooses **Run workflow**, selects main, and types DEPLOY. Restrict repository write access to yourself if only you should authorize this.

The manual dispatch is a deliberate deployment action, NOT a GitHub required-reviewer gate. For public repositories, optionally add `environment: production` to the deploy job and configure required reviewers. Private repositories have plan restrictions for reviewer gates. With environments, change the OIDC subject to `repo:YOUR_OWNER/YOUR_REPO:environment:production` and restrict environment branches to main. A solo owner must leave prevention of self-review off to approve their own deployment.

The workflow preserves old fingerprinted assets, publishes HTML last, and retains build artifacts for 30 days. Uploading pages is not an atomic release. Rollback by manually redeploying a reviewed revert commit, or restoring an archived build then invalidating CloudFront. Explicitly remove retired HTML when removing a project; the workflow intentionally avoids broad destructive deletion.

## Cost planning — checked October 21, 2026

All quoted provider prices are USD before taxes and currency conversion. Domain availability and premium pricing have not been checked.

- Porkbun standard .com: $11.08 registration / renewal on current pricing page. Its announcement forecasts approximately $11.81 from November 1, 2026. Confirm at checkout.
- CloudFront Free flat-rate plan: $0/month, 1 million requests and 100 GB transfer allowance. Includes selected integrated services and S3 storage credits; check plan eligibility/features and charges outside the bundle. Domain registration and contact API usage are separate.
- Standalone Route 53 DNS: $0.50 per hosted zone/month, with applicable query charges. Do not add this twice if covered by the chosen CloudFront plan.
- Amplify paid standard build usage: $0.01/minute; data delivery $0.15/GB and storage $0.023/GB-month. At 30 build minutes, 1 GB delivered, and 0.1 GB stored, approximately $0.45/month before other charges/free allowances. This is a sample calculation, not a bill guarantee.

Sources:
https://porkbun.com/products/domains
https://kb.porkbun.com/article/201-why-did-com-prices-go-up-and-how-high-will-they-go
https://aws.amazon.com/cloudfront/pricing/
https://aws.amazon.com/route53/pricing/
https://aws.amazon.com/amplify/pricing/
https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments

Git-based editing improves change control, but does not make published content secret. Every exported asset and client-side value is public.

## Redesign integration

The active application is now the Next.js source in `src/`, producing `out/`. Original HTML/CSS/JS files remain in the repository for reference and are not part of the new build. The former automatic Azure workflow is archived in `docs/legacy-azure-workflow.yml.disabled`; merging this change does not deploy the new site. Use the manual AWS workflow only after AWS is configured.

Homepage order: About, Experience, Skills, Projects, Contact. Professional content is consolidated from the six supplied résumé variants. The NAGAD role uses Lead Systems Analyst from the BMO/Scotiabank versions; confirm the official title before publication. Dashboard annual savings are omitted because variants differ. No source résumés, phone number, or private attachment metadata are committed. AWS certification is omitted pending confirmation because versions classify it differently.
